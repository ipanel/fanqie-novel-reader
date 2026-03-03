import { useSearchParams, Navigate } from 'react-router-dom';
import MyHead from '../components/MyHead';
import NullPage from '../components/NullPage';
import { getLastReadChapter } from '../utils/storage';

function Home() {
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('bookId');

  if (bookId) {
    const lastReadItemId = getLastReadChapter(bookId);
    const target = lastReadItemId
      ? `/chapter?bookId=${bookId}&itemId=${lastReadItemId}`
      : `/catalog?bookId=${bookId}`;
    return <Navigate to={target} replace />;
  }

  return (
    <>
      <MyHead />
      <NullPage />
    </>
  );
}

export default Home;
