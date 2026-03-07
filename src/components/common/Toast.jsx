import { useEffect } from 'react';
import styled from 'styled-components';

const ToastWrapper = styled.div`
  position: fixed;
  top: calc(66px + env(safe-area-inset-top));
  right: calc(16px + env(safe-area-inset-right));
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 20px;
  background-color: rgba(255, 193, 7, 0.95);
  border: 1px solid rgba(255, 193, 7, 0.6);
  border-radius: 12px;
  color: #1a1a1a;
  font-size: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  max-width: min(320px, calc(100vw - 48px));
`;

const CloseButton = styled.button`
  flex-shrink: 0;
  padding: 0;
  margin: -4px -4px 0 0;
  background: none;
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 20px;
  line-height: 1;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

function Toast({ message, duration = 2000, onExpire }) {
  useEffect(() => {
    if (!message || !onExpire) return;
    const id = setTimeout(onExpire, duration);
    return () => clearTimeout(id);
  }, [message, duration, onExpire]);

  if (!message) return null;

  return (
    <ToastWrapper role="status" aria-live="polite">
      <span>{message}</span>
      <CloseButton type="button" onClick={onExpire} aria-label="關閉">
        ×
      </CloseButton>
    </ToastWrapper>
  );
}

export default Toast;
