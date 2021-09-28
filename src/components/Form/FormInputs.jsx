import React, { useState } from 'react';
import axios from 'axios';
import { setDataInLocalStorage } from '@root/utils';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/textArea';
import CheckBox from './CheckBox';
import FormButton from './FormButton';
import config from '../../../config';
import { StyledButtonContainer, StyledFormInputs, StyledValidation } from './FormStyles';

function FormInputs({ toolTip }) {

  const [isChecked, setIsChecked] = useState(null);
  const [isClicked, setIsClicked] = useState(null);
  const toolTipText = toolTip.fields.text1.content[0].content[0].value;
  
  const [value, setValue] = useState({
    lname: setDataInLocalStorage('lname'),
    fname: setDataInLocalStorage('fname'),
    email: setDataInLocalStorage('email'),
    topic: setDataInLocalStorage('topic'),
    contents: setDataInLocalStorage('contents'),
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
            .post(config.FORMCARRY_URL, value, {
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
          
      function setToLocalStorage(data) {
        if (typeof window !== 'undefined' && window.localStorage) {
          localStorage.setItem('lname', data.lname);
          localStorage.setItem('fname', data.fname);
          localStorage.setItem('topic', data.topic);
          localStorage.setItem('email', data.email);
          localStorage.setItem('contents', data.contents);
        }
      }
      setToLocalStorage(value);

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
              <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Imię jest wymagane(min. 3 znaki)</StyledValidation>
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
              <StyledValidation style={{ textAlign: 'left', color: 'red' }}>
                Nazwisko jest wymagane(min. 3 znaki)
              </StyledValidation>
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
        {err.email && <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Email jest wymagany</StyledValidation>}
        {err.wrongEmail && (
          <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Email jest nieprawidłowy</StyledValidation>
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
          <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Temat jest wymagany(min. 5 znaków)</StyledValidation>
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
          <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Wiadomość jest wymagana(min. 10 znaków)</StyledValidation>
        )}
        <CheckBox
          id="check"
          onClick={(e) => handleClickCheckbox(e)}
          onChange={(e) => handleChangeCheckbox(e)}
          toolTipText={toolTipText}
        />
        {err.check && <StyledValidation style={{ textAlign: 'left', color: 'red' }}>Checbox jest wymagany</StyledValidation>}
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
