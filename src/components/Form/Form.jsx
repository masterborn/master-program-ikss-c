import React from 'react';
import FormInputs from './FormInputs';
import { StyledForm, StyledFormParagraph } from './FormStyles';

function Form({ content }) {
  const headline = content.find((v) => v.fields.identifier === 'contact-form-text');
  const toolTip = content.find((v) => v.fields.identifier === 'contact-form-tooltip');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;

  return (
    <StyledForm>
      <h3>{headlineTitle}</h3>
      <StyledFormParagraph>{headlineDescription}</StyledFormParagraph>
      <FormInputs toolTip={toolTip} />
    </StyledForm>
  );
}

export default Form;
