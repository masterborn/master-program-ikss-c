import React from 'react';
import { useRouter } from 'next/router';
import { ModalContext } from '@root/contextProviders/modalContext';
import FormInputs from './FormInputs';
import CloseBtn from '../../assets/closeBtn/coolicon.svg';
import { StyledForm, StyledFormParagraph, ClosedButton } from './FormStyles';

function Form({ content }) {
  const headline = content.find((v) => v.fields.identifier === 'contact-form-text');
  const toolTip = content.find((v) => v.fields.identifier === 'contact-form-tooltip');
  const headlineTitle = headline.fields.title;
  const headlineDescription = headline.fields.text1.content
    .find((v) => v.nodeType === 'paragraph')
    .content.find((v) => v.nodeType === 'text').value;
  const { pathname } = useRouter();
  const isMainPage = pathname === '/';
  const { onCloseModal } = React.useContext(ModalContext);

  return (
    <StyledForm>
      {!isMainPage && (
        <ClosedButton onClick={onCloseModal}>
          <CloseBtn />
        </ClosedButton>
      )}
      <h3>{headlineTitle}</h3>
      <StyledFormParagraph>{headlineDescription}</StyledFormParagraph>
      <FormInputs toolTip={toolTip} />
    </StyledForm>
  );
}

export default Form;
