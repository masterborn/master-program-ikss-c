import Form from '@root/components/Form/Form';
import React, { useEffect, useCallback, useContext } from 'react';
import DataContext from '@root/contextProviders/dataContext';
import styled from 'styled-components';

const Overlay = styled.div`
  position: absolute;
  inset: 0px;
  transform: translateY(0px);
  padding: 0px 24px;
  overflow: hidden;
`;

const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  top: -100px;
  width: 100%;
  height: 2000px;
  cursor: pointer;
  animation: 0.3s ease 0s 1 normal both running gsLxde;
  background-color: rgba(26, 40, 71, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Modal({ show, close }) {
  const formContent = useContext(DataContext);
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!show) {
    return null;
  }

  return (
    <ModalDiv className="modal" onClick={close}>
      <Overlay onClick={(e) => e.stopPropagation()}>
        <Form content={formContent.content} />
      </Overlay>
    </ModalDiv>
  );
}

export default Modal;
