import styled from 'styled-components';

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    gap: 2px;
  }
`;
