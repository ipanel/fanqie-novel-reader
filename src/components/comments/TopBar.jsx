import React, { useState } from 'react';
import { Globe, Languages, List, RefreshCw } from 'lucide-react';
import TopBarBase from '../common/TopBarBase';
import HomeButton from '../common/HomeButton';
import { IconButton } from '../common/IconButton';
import IconDropdown from '../common/IconDropdown';
import { buildCatalogUrl } from '../../utils/navigation';
import { API_OPTIONS } from '../../utils/constants';
import { getApiBase, setApiBase } from '../../services/api';

const apiOptions = API_OPTIONS.map((o) => ({ value: o.url, label: o.label }));

function TopBar({ bookId, navigate, useTraditionalChinese, toggleTraditionalChinese, onRefresh }) {
  const [apiBase, setApiBaseState] = useState(getApiBase);
  return (
    <TopBarBase>
      <HomeButton title="返回首頁" />
      <IconDropdown
        icon={<Globe size={20} strokeWidth={2.5} />}
        title="API 來源"
        ariaLabel="選擇 API 來源"
        options={apiOptions}
        value={apiBase}
        onChange={(url) => {
          setApiBase(url);
          setApiBaseState(url);
        }}
      />
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
