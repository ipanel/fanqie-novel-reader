import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 24px 24px calc(24px + env(safe-area-inset-bottom));
  color: var(--text-color-secondary);
  font-size: 13px;
  max-width: 800px;
  margin: 0 auto;
  border-top: 1px solid var(--border-color);
`;

function Footer() {
  return <FooterWrapper>番茄小說閱讀器 · 簡單、乾淨、無廣告</FooterWrapper>;
}

export default Footer;
