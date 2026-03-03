import { getUseTraditionalChinese } from './storage';

let converter = null;
let converterPromise = null;

async function getConverter() {
  if (converter) return converter;
  if (!converterPromise) {
    converterPromise = import('opencc-js/cn2t').then(({ Converter }) => {
      converter = Converter({ from: 'cn', to: 'tw' });
      return converter;
    });
  }
  return converterPromise;
}

export async function toTraditional(text) {
  if (!text || typeof text !== 'string') return text;
  const conv = await getConverter();
  return conv(text);
}

export async function maybeConvert(text, useTraditional) {
  const shouldConvert = useTraditional !== undefined ? useTraditional : getUseTraditionalChinese();
  if (!shouldConvert || !text || typeof text !== 'string') return text;
  const conv = await getConverter();
  return conv(text);
}
