import React, { useState } from 'react';
import { useMedia } from 'react-use';
import axios from 'axios';
import { setDataInLocalStorage } from '@root/utils';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/textArea';
import CheckBox from './CheckBox';
import FormButton from './FormButton';
import config from '../../../config';
import {
  StyledButtonContainer,
  StyledFormInputs,
  StyledValidation,
  StyledNameInputs,
  StyledStaticInputHeight,
  StyledStaticTextareaHeight,
  StyledStaticCheckboxHeight,
} from './FormStyles';

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

  const isMobile = useMedia('(max-width: 860px)');

  function setButtonError(){
    setStatus('error');
    if (!isMobile) {
      setSubmitButtonText('Coś poszło nie tak. Spróbuj jeszcze raz.');
    } else if (isMobile) {
      setSubmitButtonText('Spróbuj jeszcze raz.');
    }
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
                if(!isMobile) {
                  setSubmitButtonText('Wiadomość wysłana! Odpowiemy wkrótce.');
                } else if(isMobile){
                  setSubmitButtonText('Wiadomość wysłana!');
                }
                resetInputsState();
                setIsClicked(true);
                resetForm();
              }
            })
            .catch(() => {
              setStatus('error');
              if(!isMobile) {
                setSubmitButtonText('Coś poszło nie tak. Spróbuj jeszcze raz.');
              } else if(isMobile){
                setSubmitButtonText('Spróbuj jeszcze raz.');
              }
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
        <StyledNameInputs>
          <StyledStaticInputHeight>
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
              <StyledValidation>Imię jest wymagane(min. 3 znaki)</StyledValidation>
            )}
          </StyledStaticInputHeight>
          <StyledStaticInputHeight>
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
              <StyledValidation> Nazwisko jest wymagane(min. 3 znaki) </StyledValidation>
            )}
          </StyledStaticInputHeight>
        </StyledNameInputs>
        <StyledStaticInputHeight>
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
        {err.email && <StyledValidation>Email jest wymagany</StyledValidation>}
        {err.wrongEmail && ( <StyledValidation>Email jest nieprawidłowy</StyledValidation> )}
        </StyledStaticInputHeight>
        <StyledStaticInputHeight>
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
          <StyledValidation>Temat jest wymagany(min. 5 znaków)</StyledValidation>
        )}
        </StyledStaticInputHeight>
        <StyledStaticTextareaHeight>
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
        {err.contents && (<StyledValidation>Wiadomość jest wymagana(min. 10 znaków)</StyledValidation>)}
        </StyledStaticTextareaHeight>
        <StyledStaticCheckboxHeight>
        <CheckBox
          id="check"
          onClick={(e) => handleClickCheckbox(e)}
          onChange={(e) => handleChangeCheckbox(e)}
          toolTipText={toolTipText}
        />
        {err.check && <StyledValidation>Checbox jest wymagany</StyledValidation>}
        </StyledStaticCheckboxHeight>
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
