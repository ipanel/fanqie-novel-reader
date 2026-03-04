export function sortChaptersByNumber(chapters, order = 'ascending') {
  const items = [...(chapters || [])];
  
  const regex = /第(\d+)章/;
  
  items.sort((a, b) => {
    const aMatch = a.title.match(regex);
    const bMatch = b.title.match(regex);
    
    if (!aMatch || !bMatch) return 0;
    
    const aChapter = parseInt(aMatch[1]);
    const bChapter = parseInt(bMatch[1]);
    
    return order === 'descending' ? bChapter - aChapter : aChapter - bChapter;
  });
  
  return items;
}
