import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import styled from 'styled-components';

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: var(--text-color-secondary);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background-color: var(--hover-background-color);
    color: var(--accent-color);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

function HomeButton() {
  return (
    <HomeLink to="/" title="返回首頁">
      <Home size={24} strokeWidth={2} />
    </HomeLink>
  );
}

export default HomeButton;
