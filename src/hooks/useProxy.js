import { useState, useCallback } from 'react';
import { getUseProxy, setUseProxy } from '../utils/storage';

export function useProxy() {
  const [useProxyEnabled, setUseProxyState] = useState(getUseProxy);

  const toggleProxy = useCallback(() => {
    const next = !getUseProxy();
    setUseProxy(next);
    setUseProxyState(next);
  }, []);

  return [useProxyEnabled, toggleProxy];
}
