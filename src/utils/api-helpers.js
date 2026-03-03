import { fetchBook, fetchBookDetail } from '../api';

export async function fetchBookWithDetail(bookId, { forceRefresh = false } = {}) {
  const [bookRes, detail] = await Promise.all([
    fetchBook(bookId, { forceRefresh }),
    fetchBookDetail(bookId, { forceRefresh }).catch(() => ({}))
  ]);
  
  const bookData = bookRes.data.data.data;
  return {
    ...bookData,
    book_info: { ...bookData.book_info, ...detail },
  };
}
