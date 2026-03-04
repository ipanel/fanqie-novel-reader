import { useSearchParams, Navigate } from 'react-router-dom';
import MyHead from '../components/MyHead';
import NullPage from '../components/NullPage';
import Footer from '../components/Footer';
import { getLastReadChapter } from '../utils/storage';
import { buildChapterOrCatalogUrl } from '../utils/navigation';

function Home() {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('bookId');

  if (bookId) {
    const lastReadItemId = getLastReadChapter(bookId);
    const target = buildChapterOrCatalogUrl(bookId, lastReadItemId);
    return <Navigate to={target} replace />;
  }

  return (
    <>
      <MyHead />
      <NullPage />
      <Footer />
    </>
  );
}

export default Home;
