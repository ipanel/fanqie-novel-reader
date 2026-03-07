/**
 * Formats an error for user display. Handles known API/network error types
 * and falls back to the provided default message.
 */
export function formatErrorMessage(error, defaultMessage) {
  if (!error) return defaultMessage;
  const msg = error.message ?? '';
  if (msg.includes('timed out')) {
    return `請求超時（${msg}），請稍後再試。`;
  }
  if (msg.includes('Invalid book ID') || msg.includes('book not found')) {
    return '書籍 ID 無效或找不到該書籍，請檢查後重試。';
  }
  if (msg.includes('Failed to fetch')) {
    return '請求失敗，請檢查網路連線或稍後再試。';
  }
  return defaultMessage;
}
