import React, {useState} from 'react';
import axios from 'axios';
import Input from '../UI/Input/Input';
import TextArea from '../UI/TextArea/textArea';
import CheckBox from './CheckBox';
import FormButton from './FormButton';
import { StyledButtonContainer } from './FormStyles';

function FormInputs({ toolTip }) {

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
    topic: false,
    contents: false,
  });
  const [placeholder, setPlaceholder] = useState({
    fname: 'Wpisz swoje imię',
    lname: 'Wpisz swoje nazwisko',
    email: 'Wpisz swój email',
    topic: 'Temat wiadomości',
    contents: 'O czym chcesz z nami porozmawiać?',
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

  function handleFnameChange(e) {
    setErr((prev) => ({ ...prev, fname: false }));
    setValue((prev) => ({ ...prev, fname: e.target.value }));
    setPlaceholder((prev) => ({ ...prev, fname: 'Wpisz swoje imię' }));
    clearButton();
  }
  function handleLnameChange(e) {
    setErr((prev) => ({ ...prev, lname: false }));
    setValue((prev) => ({ ...prev, lname: e.target.value }));
    setPlaceholder((prev) => ({ ...prev, lname: 'Wpisz swoje nazwisko' }));
    clearButton();
  }
  function handleEmailChange(e) {
    setErr((prev) => ({ ...prev, email: false }));
    setValue((prev) => ({ ...prev, email: e.target.value }));
    setPlaceholder((prev) => ({ ...prev, email: 'Wpisz swój email' }));
    clearButton();
  }
  function handleTopicChange(e) {
    setErr((prev) => ({ ...prev, topic: false }));
    setValue((prev) => ({ ...prev, topic: e.target.value }));
    setPlaceholder((prev) => ({ ...prev, topic: 'Teamt wiadomości' }));
    clearButton();
  }
  function handleContentsChange(e) {
    setErr((prev) => ({ ...prev, contents: false }));
    setValue((prev) => ({ ...prev, contents: e.target.value }));
    setPlaceholder((prev) => ({ ...prev, contents: 'O czym chcesz z nami porozmawiać?' }));
    clearButton();
  }

  function validation() {
    if (!value.fname) {
      setErr((prev) => ({ ...prev, fname: true }));
      setButtonError();
      setPlaceholder((prev) => ({ ...prev, fname: 'Imię jest wymagane' }));
    }

    if (!value.lname) {
      setErr((prev) => ({ ...prev, lname: true }));
      setButtonError();
      setPlaceholder((prev) => ({ ...prev, lname: 'Nazwisko jest wymagane' }));
    }

    if (!value.email) {
      setErr((prev) => ({ ...prev, email: true }));
      setButtonError();
      setPlaceholder((prev) => ({ ...prev, email: 'Email jest wymagany' }));
    }

    if (!value.topic) {
      setErr((prev) => ({ ...prev, topic: true }));
      setButtonError();
      setPlaceholder((prev) => ({ ...prev, topic: 'Temat jest wymagany' }));
    }

    if (!value.contents) {
      setErr((prev) => ({ ...prev, contents: true }));
      setButtonError();
      setPlaceholder((prev) => ({ ...prev, contents: 'Treść jest wymagana' }));
    }
  }

  function handleSubmit(event) {

    event.preventDefault();

    const resetForm = () => {
      document.getElementById('form').reset();
    };

    if (!err.fname && !err.lname && !err.email && !err.topic && !err.contents) {
      setStatus('pending');
      setSubmitButtonText('');
      try {
        axios
          .post('https://formcarry.com/s/W2_tnOLNhqA', value, {
            headers: { Accept: 'application/json' },
          })
          .then((response) => {
            if (response.data.status === 'success') {
              setStatus('success');
              setSubmitButtonText('Wiadomość wysłana! Odpowiemy wkrótce.');
              resetInputsState();
              resetForm();
            }
          })
          .catch((error) => {
            setStatus('error');
            setSubmitButtonText('Coś poszło nie tak. Spróbuj jeszcze raz.');
            throw Error(error);
          });
      } catch (e) {
        throw Error(e);
      }
    }
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <Input
        id="fname"
        name="fname"
        type="text"
        labelText="Imię"
        placeholder={placeholder.fname}
        onChange={(e) => handleFnameChange(e)}
        error={err.fname}
        icon={err.fname}
      />
      <Input
        id="lname"
        name="lname"
        type="text"
        labelText="Nazwisko"
        placeholder={placeholder.lname}
        onChange={(e) => handleLnameChange(e)}
        error={err.lname}
        icon={err.lname}
      />
      <Input
        id="email"
        name="email"
        type="email"
        labelText="Adres email"
        placeholder={placeholder.email}
        onChange={(e) => handleEmailChange(e)}
        error={err.email}
        icon={err.email}
      />
      <Input
        id="topic"
        name="topic"
        type="text"
        labelText="Temat"
        placeholder={placeholder.topic}
        onChange={(e) => handleTopicChange(e)}
        error={err.topic}
        icon={err.topic}
      />
      <TextArea
        id="contents"
        name="contents"
        type="textarea"
        row={50}
        col={50}
        labelText="Treść"
        placeholder={placeholder.contents}
        onChange={(e) => handleContentsChange(e)}
        error={err.contents}
        icon={err.contents}
      />
      <CheckBox toolTipText={toolTipText}/>
      <StyledButtonContainer>
        <FormButton type="submit" onClick={validation} status={status} submitButtonText={submitButtonText}/>
      </StyledButtonContainer>
    </form>
  );
}

export default FormInputs;
