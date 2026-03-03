import { safeGetJSON, safeSetJSON } from './storage';

export function createCacheHelpers(cacheKeyPrefix) {
  return {
    get: (id) => safeGetJSON(`${cacheKeyPrefix}-${id}`),
    set: (id, data) => safeSetJSON(`${cacheKeyPrefix}-${id}`, data),
  };
}
