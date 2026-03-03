import { useState, useEffect } from 'react';
import { maybeConvert } from '../utils/zh-convert';

export function useConvertedText(text, useTraditional) {
  const [converted, setConverted] = useState(text ?? '');

  useEffect(() => {
    if (!text) {
      setConverted('');
      return;
    }
    let cancelled = false;
    maybeConvert(text, useTraditional).then((result) => {
      if (!cancelled) setConverted(result);
    });
    return () => {
      cancelled = true;
    };
  }, [text, useTraditional]);

  return converted;
}
