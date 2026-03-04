import { useState, useCallback } from 'react';
import { getUseTraditionalChinese, setUseTraditionalChinese } from '../utils/storage';

export function useTraditionalChineseToggle(onToggle) {
  const [useTraditionalChinese, setUseTraditionalChineseState] = useState(getUseTraditionalChinese);

  const toggleTraditionalChinese = useCallback(() => {
    const next = !useTraditionalChinese;
    setUseTraditionalChinese(next);
    setUseTraditionalChineseState(next);
    if (onToggle) {
      onToggle(next);
    }
  }, [useTraditionalChinese, onToggle]);

  return [useTraditionalChinese, toggleTraditionalChinese];
}
