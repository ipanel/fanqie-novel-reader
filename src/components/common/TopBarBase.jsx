import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ActionBar from './ActionBar';

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  padding-top: calc(16px + env(safe-area-inset-top));
  background-color: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 480px) {
    padding: 12px 16px;
    padding-top: calc(12px + env(safe-area-inset-top));
  }
`;

const SiteTitle = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    color: var(--accent-color);
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

function TopBarBase({ children, panelTitle = '工具' }) {
  return (
    <TopBarWrapper>
      <SiteTitle to="/">番茄小說閱讀器</SiteTitle>
      <ActionBar panelTitle={panelTitle}>
        {children}
      </ActionBar>
    </TopBarWrapper>
  );
}

export default TopBarBase;
