import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { GrayButton } from './GrayButton';

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  height: 100vh;
  gap: 16px;
  background-color: var(--background-color);
  padding: 16px;
`;

const ErrorText = styled.p`
  font-size: 1rem;
  color: var(--text-color);
  text-align: center;
  word-break: break-word;
`;

const StyledHomeButton = styled(GrayButton)`
  margin-top: 8px;
`;

function Error({ message, href = '/' }) {
  const navigate = useNavigate();
  return (
    <ErrorWrapper role="alert">
      <ErrorText dangerouslySetInnerHTML={{ __html: message }} />
      <StyledHomeButton type="button" onClick={() => navigate(href)}>
        返回首頁
      </StyledHomeButton>
    </ErrorWrapper>
  );
}

export default Error;
