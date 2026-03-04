import styled from 'styled-components';

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  font-size: 0.9rem;
  color: var(--text-color-secondary);
  background: var(--background-color2);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent-color);
    border-color: var(--accent-color);
  }
`;
