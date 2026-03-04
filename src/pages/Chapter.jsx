import { useEffect, useCallback } from 'react';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import Main from '../components/Main';
import Error from '../components/Error';
import MyHead from '../components/MyHead';
import LoadingPage from '../components/LoadingPage';
import { useTraditionalChineseToggle } from '../hooks/useTraditionalChineseToggle';
import { useFontSize, useTextBrightness } from '../hooks/useTextSettings';
import { useChapterLoader } from '../hooks/useChapterLoader';
import { buildCatalogUrl } from '../utils/navigation';

const ChapterWrapper = styled.div`
  background-color: var(--background-color);
  min-height: 100dvh;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`;

function Chapter() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const itemId = searchParams.get('itemId');
  const bookId = searchParams.get('bookId');
  
  const { error, chapterData, bookInfo, loading, loadChapter } = useChapterLoader(itemId, bookId);
  const [fontSize, handleFontSizeChange] = useFontSize();
  const [textBrightness, handleTextBrightnessChange] = useTextBrightness();
  const [useTraditionalChinese, toggleTraditionalChinese] = useTraditionalChineseToggle();

  const handleTraditionalChineseToggle = useCallback(() => {
    toggleTraditionalChinese();
    loadChapter(false);
  }, [loadChapter, toggleTraditionalChinese]);

  const handleRefresh = useCallback(() => {
    loadChapter(true);
  }, [loadChapter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [itemId]);

  if (!itemId) {
    return bookId ? <Navigate to={buildCatalogUrl(bookId)} replace /> : <Navigate to="/" replace />;
  }

  if (error) {
    return <Error message={error} href={bookId ? buildCatalogUrl(bookId) : '/'} />;
  }

  return (
    <ChapterWrapper>
      {loading ? (
        <LoadingPage onAbort={() => navigate('/')} />
      ) : (
        <>
          <MyHead bookInfo={bookInfo} chapterData={chapterData} />
          {chapterData && (
            <>
              <TopBar
                chapterData={chapterData}
                bookInfo={bookInfo}
                fontSize={fontSize}
                onFontSizeChange={handleFontSizeChange}
                textBrightness={textBrightness}
                onTextBrightnessChange={handleTextBrightnessChange}
                useTraditionalChinese={useTraditionalChinese}
                onTraditionalChineseToggle={handleTraditionalChineseToggle}
                onRefresh={handleRefresh}
              />
              <Main chapterData={chapterData} fontSize={fontSize} textBrightness={textBrightness} />
              <BottomBar chapterData={chapterData} bookId={bookId} />
            </>
          )}
        </>
      )}
    </ChapterWrapper>
  );
}

export default Chapter;
