export const MAX_ABSTRACT_LENGTH = 120;

export function cleanAbstract(text) {
  if (!text) return '';
  return text.replace(/\n　　/g, '\n').trim();
}

export function truncateText(text, maxLength = MAX_ABSTRACT_LENGTH) {
  if (!text) return '';
  return text.length > maxLength ? text.slice(0, maxLength) + '…' : text;
}
