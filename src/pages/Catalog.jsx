import { useState } from 'react';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';
import Menu from '../components/catalog/Menu';
import Info from '../components/book/Info';
import Error from '../components/common/Error';
import Header from '../components/common/Header';
import Loading from '../components/common/Loading';
import PageWrapper from '../components/common/PageWrapper';
import { useToast } from '../contexts/ToastContext';
import TopBar from '../components/catalog/TopBar';
import styled from 'styled-components';
import { getLastReadChapter, isChapterCached } from '../utils/storage';
import { sortChaptersByNumber } from '../utils/sorting';
import { exportBookToTxt } from '../utils/exportBookTxt';
import { useTraditionalChineseToggle } from '../hooks/useTraditionalChineseToggle';
import { useBookLoader } from '../hooks/useBookLoader';
import { useDownloadManager } from '../contexts/DownloadManager';
import { MAX_CONCURRENT_DOWNLOADS } from '../utils/constants';

const Content = styled.div`
  padding-top: calc(76px + env(safe-area-inset-top));

  @media (max-width: 480px) {
    padding-top: calc(68px + env(safe-area-inset-top));
  }
`;

function Catalog() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const bookId = searchParams.get('bookId');
  const lastReadItemId = bookId ? getLastReadChapter(bookId) : null;
  
  const { error, bookInfo, loadBook } = useBookLoader(bookId);
  const { addToQueue, isDownloading, startDownloadAll, stopDownloadAll, isDownloadingAll } = useDownloadManager();
  const { showToast } = useToast();
  const [sortOrder, setSortOrder] = useState('ascending');
  const [useTraditionalChinese, toggleTraditionalChinese] = useTraditionalChineseToggle();

  const itemDataList = bookInfo?.item_data_list ?? [];
  const uncachedItemIds = itemDataList.filter((item) => !isChapterCached(item.item_id)).map((item) => item.item_id);
  const hasUncachedChapters = uncachedItemIds.length > 0;
  const anyDownloading = uncachedItemIds.some((id) => isDownloading(id));
  const batchSize = Math.min(MAX_CONCURRENT_DOWNLOADS, uncachedItemIds.length);
  const downloadingAll = isDownloadingAll(bookId);

  const handleBatchDownload = () => {
    const batch = uncachedItemIds.slice(0, MAX_CONCURRENT_DOWNLOADS);
    batch.forEach((itemId) => addToQueue(itemId, false));
  };

  const handleDownloadAll = () => {
    if (downloadingAll) {
      stopDownloadAll();
    } else {
      startDownloadAll(bookId, uncachedItemIds);
    }
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };

  const handleExportTxt = () => {
    const list = bookInfo?.item_data_list ?? [];
    const sorted = sortChaptersByNumber(list, sortOrder);
    const result = exportBookToTxt({
      bookId,
      bookInfo,
      itemDataList: sorted,
      useTraditionalChinese,
    });
    if (result?.exportedCount === 0) {
      showToast('沒有已下載的章節，無法匯出正文。請先下載章節。');
    }
  };

  if (!bookId) {
    return <Navigate to="/" replace />;
  }

  if (error) {
    return <Error message={error} href="/" />;
  }

  return (
    <PageWrapper>
      <Header bookInfo={bookInfo} />
      {bookInfo && (
        <TopBar
          bookId={bookId}
          navigate={navigate}
          useTraditionalChinese={useTraditionalChinese}
          toggleTraditionalChinese={toggleTraditionalChinese}
          sortOrder={sortOrder}
          onSortChange={handleSortChange}
          hasUncachedChapters={hasUncachedChapters}
          batchSize={batchSize}
          uncachedItemIds={uncachedItemIds}
          anyDownloading={anyDownloading}
          downloadingAll={downloadingAll}
          onBatchDownload={handleBatchDownload}
          onDownloadAll={handleDownloadAll}
          onReload={() => loadBook(true)}
          onExportTxt={handleExportTxt}
          lastReadItemId={lastReadItemId}
        />
      )}
      {bookInfo ? (
        <Content>
          <Info bookInfo={bookInfo} useTraditionalChinese={useTraditionalChinese} />
          {bookInfo.item_data_list && (
            <Menu sortOrder={sortOrder} itemDataList={bookInfo.item_data_list} bookId={bookId} useTraditionalChinese={useTraditionalChinese} />
          )}
        </Content>
      ) : (
        <Loading onAbort={() => navigate('/')} />
      )}
    </PageWrapper>
  );
}

export default Catalog;
