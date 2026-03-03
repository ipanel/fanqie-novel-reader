import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: var(--background-color2);
  border-radius: 8px;
  padding: 16px 20px;
  max-width: 400px;
  max-height: 70vh;
  overflow-y: auto;
`;

const ModalText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-color);
  white-space: pre-line;
  word-break: break-word;
`;

const ModalButton = styled.button`
  display: block;
  margin-top: 12px;
  padding: 8px 16px;
  background: var(--high-color);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
`;

function AbstractModal({ text, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalText>{text}</ModalText>
        <ModalButton type="button" onClick={onClose}>
          收起
        </ModalButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default AbstractModal;
