import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Check, X, Loader2 } from 'lucide-react';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningIcon = styled.span`
  display: flex;
  animation: ${spin} 1s linear infinite;
`;

function ChapterStatusIcon({ isDownloading, isCached }) {
  if (isDownloading) {
    return (
      <SpinningIcon>
        <Loader2 size={18} />
      </SpinningIcon>
    );
  }

  if (isCached) {
    return <Check size={18} color="var(--accent-color)" />;
  }

  return <X size={18} color="var(--text-color-secondary)" />;
}

export default ChapterStatusIcon;
