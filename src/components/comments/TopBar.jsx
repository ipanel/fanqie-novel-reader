import React from 'react';
import { Globe, Languages, List, RefreshCw } from 'lucide-react';
import TopBarBase from '../common/TopBarBase';
import HomeButton from '../common/HomeButton';
import { IconButton, IconLink } from '../common/IconButton';
import IconDropdown from '../common/IconDropdown';
import { useApiBase } from '../../hooks/useApiBase';
import { buildCatalogUrl } from '../../utils/navigation';
import { API_OPTIONS } from '../../utils/constants';
import { getTraditionalChineseToggleTitle } from '../../utils/zh-convert';

function TopBar({ bookId, useTraditionalChinese, toggleTraditionalChinese, onRefresh }) {
  const [apiBase, handleApiChange] = useApiBase();
  return (
    <TopBarBase>
      <HomeButton title="返回首頁" />
      <IconDropdown
        icon={<Globe size={20} strokeWidth={2.5} />}
        title="API 來源"
        ariaLabel="選擇 API 來源"
        options={API_OPTIONS}
        value={apiBase}
        onChange={handleApiChange}
      />
      <IconButton
        type="button"
        title={getTraditionalChineseToggleTitle(useTraditionalChinese)}
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
      {bookId && (
        <IconLink to={buildCatalogUrl(bookId)} title="目錄">
          <List size={20} strokeWidth={2.5} />
        </IconLink>
      )}
    </TopBarBase>
  );
}

export default TopBar;
