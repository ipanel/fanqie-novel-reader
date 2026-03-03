export function formatErrorMessage(error, defaultMessage) {
  if (error.message?.includes('timed out')) {
    return `請求超時（${error.message}），請稍後再試。`;
  }
  return defaultMessage;
}
