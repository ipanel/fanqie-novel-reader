import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import styled from 'styled-components';

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  color: var(--text-color-secondary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: var(--hover-background-color);
    color: var(--accent-color);
    border-color: var(--accent-color);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

function BackButton() {
  return (
    <BackLink to="/">
      <ArrowLeft size={20} strokeWidth={2} />
      返回
    </BackLink>
  );
}

export default BackButton;
