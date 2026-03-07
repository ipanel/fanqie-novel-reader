import React from 'react';
import { Languages, List, RefreshCw } from 'lucide-react';
import TopBarBase from '../common/TopBarBase';
import HomeButton from '../common/HomeButton';
import { IconButton } from '../common/IconButton';
import { buildCatalogUrl } from '../../utils/navigation';

function TopBar({ bookId, navigate, useTraditionalChinese, toggleTraditionalChinese, onRefresh }) {
  return (
    <TopBarBase>
      <HomeButton />
      <IconButton
        type="button"
        title={useTraditionalChinese ? '切換為簡體中文' : '切換為繁體中文'}
        onClick={toggleTraditionalChinese}
        style={useTraditionalChinese ? { color: 'var(--accent-color)' } : undefined}
      >
        <Languages size={20} strokeWidth={2.5} />
      </IconButton>
      <IconButton
        type="button"
        title="重新載入評論"
        onClick={onRefresh}
      >
        <RefreshCw size={20} strokeWidth={2.5} />
      </IconButton>
      <IconButton
        type="button"
        title="目錄"
        onClick={() => navigate(buildCatalogUrl(bookId))}
      >
        <List size={20} strokeWidth={2.5} />
      </IconButton>
    </TopBarBase>
  );
}

export default TopBar;
