import React from 'react';
import { ArrowUpDown, Bookmark, CloudDownload, Download, Languages, MessageCircle, RefreshCw } from 'lucide-react';
import TopBarBase from '../common/TopBarBase';
import HomeButton from '../common/HomeButton';
import { IconButton } from '../common/IconButton';
import { buildChapterUrl, buildCommentsUrl } from '../../utils/navigation';

function TopBar({
  bookId,
  navigate,
  useTraditionalChinese,
  toggleTraditionalChinese,
  sortOrder,
  onSortChange,
  hasUncachedChapters,
  batchSize,
  uncachedItemIds,
  anyDownloading,
  downloadingAll,
  onBatchDownload,
  onDownloadAll,
  onReload,
  lastReadItemId,
}) {
  return (
    <TopBarBase>
      <HomeButton />
      <IconButton
        type="button"
        title={sortOrder === 'ascending' ? '升序排列 (點擊切換為降序)' : '降序排列 (點擊切換為升序)'}
        onClick={onSortChange}
        style={sortOrder === 'descending' ? { color: 'var(--accent-color)' } : undefined}
      >
        <ArrowUpDown size={20} strokeWidth={2.5} />
      </IconButton>
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
        title={hasUncachedChapters ? `批次下載 (${batchSize} 章)` : '全部已下載'}
        onClick={onBatchDownload}
        disabled={!hasUncachedChapters || anyDownloading || downloadingAll}
      >
        <Download size={20} strokeWidth={2.5} />
      </IconButton>
      <IconButton
        type="button"
        title={downloadingAll ? '停止下載全部' : hasUncachedChapters ? `下載全部 (${uncachedItemIds.length} 章)` : '全部已下載'}
        onClick={onDownloadAll}
        disabled={!hasUncachedChapters && !downloadingAll}
        style={downloadingAll ? { color: 'var(--accent-color)' } : undefined}
      >
        <CloudDownload size={20} strokeWidth={2.5} />
      </IconButton>
      <IconButton
        type="button"
        title="評論"
        onClick={() => navigate(buildCommentsUrl(bookId))}
      >
        <MessageCircle size={20} strokeWidth={2.5} />
      </IconButton>
      <IconButton
        type="button"
        title="重新載入目錄"
        onClick={onReload}
      >
        <RefreshCw size={20} strokeWidth={2.5} />
      </IconButton>
      {lastReadItemId && (
        <IconButton
          type="button"
          onClick={() => navigate(buildChapterUrl(lastReadItemId, bookId))}
          title="返回章節"
        >
          <Bookmark size={20} strokeWidth={2} />
        </IconButton>
      )}
    </TopBarBase>
  );
}

export default TopBar;
