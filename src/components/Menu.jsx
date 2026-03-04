import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Check, X, Loader2, Download, RefreshCw, Minus } from 'lucide-react';
import { useConvertedText } from '../hooks/useConvertedText';
import { useDownloadManager } from '../contexts/DownloadManager';
import { isChapterCached } from '../utils/storage';
import { IconButton } from './IconButton';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SpinningIcon = styled.span`
  display: flex;
  animation: ${spin} 1s linear infinite;
`;

const DisabledLinkSpan = styled.span`
  display: block;
  padding: 16px 0;
  flex: 1;
  color: var(--text-color-secondary);
  cursor: not-allowed;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
  padding: 0 16px;
  min-height: 48px;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--hover-background-color);
  }

  a {
    display: block;
    padding: 16px 0;
    text-decoration: none;
    color: var(--text-color);
    font-size: 16px;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.2s ease;

    &::before {
      content: '•';
      margin-right: 12px;
      color: var(--accent-color);
      font-size: 20px;
      vertical-align: middle;
      line-height: 0;
    }

    &:visited {
      color: var(--text-color-secondary);
    }
  }

  &:hover > a {
    color: var(--accent-color);
  }

  span.word-count {
    font-size: 12px;
    color: var(--text-color-secondary);
    margin-left: 16px;
    opacity: 0.7;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .chapter-actions {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    margin-left: 8px;
  }

  .chapter-actions button {
    padding: 6px;
    min-width: 32px;
    min-height: 32px;
  }

  .chapter-actions svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    a {
      font-size: 15px;
    }
    span.word-count {
      display: none;
    }
  }
`;

function Menu({ itemDataList, sortOrder, bookId, useTraditionalChinese = false }) {
  const { isDownloading } = useDownloadManager();
  const items = [...(itemDataList || [])];

  const compareChapters = (a, b) => {
    const regex = /第(\d+)章/;
    const aMatch = a.title.match(regex);
    const bMatch = b.title.match(regex);
    if (!aMatch || !bMatch) return 0;
    const aChapter = parseInt(aMatch[1]);
    const bChapter = parseInt(bMatch[1]);
    if (sortOrder === 'descending') return bChapter - aChapter;
    return aChapter - bChapter;
  };

  items.sort(compareChapters);

  return (
    <MenuList>
      {items.map((item) => (
        <MenuItem key={item.item_id}>
          <MenuItemLink item={item} bookId={bookId} useTraditionalChinese={useTraditionalChinese} isDownloading={isDownloading(item.item_id)} />
          <ChapterActions item={item} />
          {item.chapter_word_number != null && <span className="word-count">共計{item.chapter_word_number}字</span>}
        </MenuItem>
      ))}
    </MenuList>
  );
}

function MenuItemLink({ item, bookId, useTraditionalChinese, isDownloading }) {
  const convertedTitle = useConvertedText(item.title ?? '', useTraditionalChinese);
  const to = `/chapter?itemId=${item.item_id}${bookId ? `&bookId=${bookId}` : ''}`;

  if (isDownloading) {
    return (
      <DisabledLinkSpan>
        {convertedTitle}
      </DisabledLinkSpan>
    );
  }

  return <Link to={to}>{convertedTitle}</Link>;
}

function ChapterActions({ item }) {
  const { addToQueue, isDownloading } = useDownloadManager();
  const itemId = item.item_id;
  const cached = isChapterCached(itemId);
  const downloading = isDownloading(itemId);

  const statusIcon = downloading ? (
    <SpinningIcon>
      <Loader2 size={18} />
    </SpinningIcon>
  ) : cached ? (
    <Check size={18} color="var(--accent-color)" />
  ) : (
    <X size={18} color="var(--text-color-secondary)" />
  );

  const actionIcon = downloading ? (
    <Minus size={18} style={{ opacity: 0.5 }} />
  ) : cached ? (
    <RefreshCw size={18} />
  ) : (
    <Download size={18} />
  );

  const handleClick = () => {
    if (downloading) return;
    addToQueue(itemId, cached);
  };

  return (
    <div className="chapter-actions">
      <span title={downloading ? '下載中' : cached ? '已下載' : '未下載'} style={{ display: 'flex', color: 'var(--text-color-secondary)' }}>
        {statusIcon}
      </span>
      <IconButton
        type="button"
        title={downloading ? '下載中' : cached ? '重新整理' : '下載'}
        onClick={handleClick}
        disabled={downloading}
      >
        {actionIcon}
      </IconButton>
    </div>
  );
}

export default Menu;
