import React, {useState} from 'react';
import axios from 'axios';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/textArea';
import CheckBox from './CheckBox';
import FormButton from './FormButton';
import { StyledButtonContainer, StyledFormInputs } from './FormStyles';

function FormInputs({ toolTip }) {

  const [isChecked, setIsChecked] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const toolTipText = toolTip.fields.text1.content[0].content[0].value;
  
  const [value, setValue] = useState({
    lname: '',
    fname: '',
    email: '',
    topic: '',
    contents: ''
  });
  const [status, setStatus] = useState('');
  const [submitButtonText, setSubmitButtonText] = useState('Wyślij wiadomość');
  const [err, setErr] = useState({
    fname: false,
    lname: false,
    email: false,
    wrongEmail: false,
    topic: false,
    contents: false,
    check: false,
  });
  
  function setButtonError(){
    setStatus('error');
    setSubmitButtonText('Coś poszło nie tak. Spróbuj jeszcze raz.');
  }
  
  function clearButton() {
    setStatus('');
    setSubmitButtonText('Wyślij wiadomość');
  }
  
  function resetInputsState() {
    setValue({
      lname: '',
      fname: '',
      email: '',
      topic: '',
      contents: '',
    });
  }
  
  function handleChange(e) {
    setErr((prev) => ({ ...prev, [e.target.id]: false }));
    setValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if(e.target.id==='email'){
      setErr((prev) => ({ ...prev, wrongEmail: false }));
    }
    clearButton();
  }
  
  function handleChangeCheckbox(e){
    setIsChecked(!isChecked);
    setErr((prev) => ({ ...prev, [e.target.id]: isChecked }));
    clearButton();
  }

  function handleClickCheckbox(e) {
    if(isClicked === true)
    setIsChecked(true);
    setErr((prev) => ({ ...prev, [e.target.id]: false }));
    clearButton();
    setIsClicked(false);
  }
  
  function validation() {
    if (!value.fname || value.fname.length<3) {
      setErr((prev) => ({ ...prev, fname: true }));
      setButtonError();
    }
    
    if (!value.lname || value.lname.length < 3) {
      setErr((prev) => ({ ...prev, lname: true }));
      setButtonError();
    }
    
    if (!value.email) {
      setErr((prev) => ({ ...prev, email: true }));
      setButtonError();
    }
    if(value.email) {
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
        );
        if(!pattern.test(value.email)){
          setErr((prev) => ({ ...prev, wrongEmail: true }));
          setButtonError();
        }
      }
      if(!isChecked){
        setErr((prev) => ({ ...prev, check: true }));
        setButtonError();
      }
      
      if (!value.topic || value.topic.length < 5) {
        setErr((prev) => ({ ...prev, topic: true }));
        setButtonError();
      }
      
      if (!value.contents || value.contents.length < 10) {
        setErr((prev) => ({ ...prev, contents: true }));
        setButtonError();
      }
    }

    function handleSubmit(event) {
      
      event.preventDefault();
      
      const resetForm = () => {
        document.getElementById('form').reset();
      };
      
      if (
        !err.fname &&
        !err.lname &&
        !err.email &&
        !err.wrongEmail &&
        !err.check &&
        !err.topic &&
        !err.contents
        ) {
          setStatus('pending');
          setSubmitButtonText('');
          axios
          // TODO Move URL to env.local(after adding environment variable to Vercel)
          .post('https://formcarry.com/s/W2_tnOLNhqA', value, {
            headers: { Accept: 'application/json' },
          })
        .then((response) => {
          if (response.data.status === 'success') {
            setStatus('success');
            setSubmitButtonText('Wiadomość wysłana! Odpowiemy wkrótce.');
            resetInputsState();
            setIsClicked(true);
            resetForm();
          }
        })
        .catch(() => {
          setStatus('error');
          setSubmitButtonText('Coś poszło nie tak. Spróbuj jeszcze raz.');
        });
      }
    }
    
 
    return (
      <StyledFormInputs autoComplete="off" id="form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div>
            <Input
              id="fname"
              name="fname"
              type="text"
              labelText="Imię"
              value={value.fname}
              placeholder="Wpisz swoje imię"
              onChange={(e) => handleChange(e)}
              error={err.fname}
              icon={err.fname}
              isWide={false}
            />
            {err.fname && (
              <p style={{ textAlign: 'left', color: 'red' }}>Imię jest wymagane(min. 3 znaki)</p>
            )}
          </div>
          <div>
            <Input
              id="lname"
              name="lname"
              type="text"
              labelText="Nazwisko"
              value={value.lname}
              placeholder="Wpisz swoje nazwisko"
              onChange={(e) => handleChange(e)}
              error={err.lname}
              icon={err.lname}
              isWide={false}
            />
            {err.lname && (
              <p style={{ textAlign: 'left', color: 'red' }}>
                Nazwisko jest wymagane(min. 3 znaki)
              </p>
            )}
          </div>
        </div>
        <Input
          id="email"
          name="email"
          type="text"
          labelText="Adres email"
          value={value.email}
          placeholder="Wpisz swój adres-email"
          onChange={(e) => handleChange(e)}
          error={err.email}
          icon={err.email}
          isWide
        />
        {err.email && <p style={{ textAlign: 'left', color: 'red' }}>Email jest wymagany</p>}
        {err.wrongEmail && (
          <p style={{ textAlign: 'left', color: 'red' }}>Email jest nieprawidłowy</p>
        )}
        <Input
          id="topic"
          name="topic"
          type="text"
          labelText="Temat"
          value={value.topic}
          placeholder="Temat wiadomości"
          onChange={(e) => handleChange(e)}
          error={err.topic}
          icon={err.topic}
          isWide
        />
        {err.topic && (
          <p style={{ textAlign: 'left', color: 'red' }}>Temat jest wymagany(min. 5 znaków)</p>
        )}
        <TextArea
          id="contents"
          name="contents"
          type="textarea"
          rows={3}
          labelText="Treść"
          value={value.contents}
          placeholder="O czym chcesz z nami porozmawiać?"
          onChange={(e) => handleChange(e)}
          error={err.contents}
          icon={err.contents}
        />
        {err.contents && (
          <p style={{ textAlign: 'left', color: 'red' }}>Wiadomość jest wymagana(min. 10 znaków)</p>
        )}
        <CheckBox
          id="check"
          onClick={(e) => handleClickCheckbox(e)}
          onChange={(e) => handleChangeCheckbox(e)}
          toolTipText={toolTipText}
        />
        {err.check && <p style={{ textAlign: 'left', color: 'red' }}>Checbox jest wymagany</p>}
        <StyledButtonContainer>
          <FormButton
            type="submit"
            onClick={validation}
            status={status}
            submitButtonText={submitButtonText}
          />
        </StyledButtonContainer>
      </StyledFormInputs>
    );
}

export default FormInputs;
