import { Converter } from 'opencc-js/cn2t';
import { getUseTraditionalChinese } from './storage';

const converter = Converter({ from: 'cn', to: 'tw' });

export function maybeConvert(text, useTraditional) {
  const shouldConvert = useTraditional !== undefined ? useTraditional : getUseTraditionalChinese();
  if (!shouldConvert || !text || typeof text !== 'string') return text;
  return converter(text);
}

export function getTraditionalChineseToggleTitle(useTraditionalChinese) {
  return useTraditionalChinese ? '切換為簡體中文' : '切換為繁體中文';
}
