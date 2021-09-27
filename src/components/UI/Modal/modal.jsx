import Form from '@root/components/Form/Form';
import React, { useEffect, useCallback, useContext } from 'react';
import DataContext from '@root/contextProviders/dataContext';
import styled from 'styled-components';
import { ModalContext } from '@root/contextProviders/modalContext';

const Overlay = styled.div`
  position: fixed;
  top: -100px;
`;

const ModalDiv = styled.div`
  position: fixed;
  left: 0;
  top: -100px;
  width: 100%;
  height: 120%;
  cursor: pointer;
  animation: 0.3s ease 0s 1 normal both running gsLxde;
  background-color: rgba(26, 40, 71, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Modal() {
  const formContent = useContext(DataContext);
  const { onCloseModal, isModalOpen } = useContext(ModalContext);
  const closeOnEscapeKeyDown = useCallback(
    (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onCloseModal();
      }
    },
    [onCloseModal],
  );

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [closeOnEscapeKeyDown]);

  if (!isModalOpen) {
    return null;
  }
  return (
    <ModalDiv className="modal" onClick={onCloseModal}>
      <Overlay onClick={(e) => e.stopPropagation()}>
        <Form content={formContent.content} />
      </Overlay>
    </ModalDiv>
  );
}

export default Modal;
