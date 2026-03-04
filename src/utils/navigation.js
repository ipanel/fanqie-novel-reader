export function buildChapterUrl(itemId, bookId = null) {
  const params = new URLSearchParams({ itemId });
  if (bookId) {
    params.append('bookId', bookId);
  }
  return `/chapter?${params.toString()}`;
}

export function buildCatalogUrl(bookId) {
  return `/catalog?bookId=${bookId}`;
}

export function buildChapterOrCatalogUrl(bookId, lastReadItemId = null) {
  return lastReadItemId 
    ? buildChapterUrl(lastReadItemId, bookId)
    : buildCatalogUrl(bookId);
}
