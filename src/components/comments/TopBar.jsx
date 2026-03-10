import React from 'react';
import { RefreshCw } from 'lucide-react';
import TopBarBase from '../common/TopBarBase';
import HomeButton from '../common/HomeButton';
import CatalogButton from '../common/CatalogButton';
import ApiSourceDropdown from '../common/ApiSourceDropdown';
import ConversionDropdown from '../common/ConversionDropdown';
import { IconButton } from '../common/IconButton';

function TopBar({ bookId, conversionMode, onConversionModeChange, onRefresh }) {
  return (
    <TopBarBase>
      <HomeButton title="返回首頁" />
      <ApiSourceDropdown title="API 來源" />
      <ConversionDropdown value={conversionMode} onChange={onConversionModeChange} title="繁簡轉換" />
      <IconButton type="button" title="重新載入評論" onClick={onRefresh}>
        <RefreshCw size={20} strokeWidth={2.5} />
      </IconButton>
      <CatalogButton bookId={bookId} title="目錄" />
    </TopBarBase>
  );
}

export default TopBar;
