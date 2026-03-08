import { useState, useCallback } from 'react';
import { getApiBase, setApiBase } from '../services/api';

export function useApiBase() {
  const [apiBase, setApiBaseState] = useState(getApiBase);

  const handleApiChange = useCallback((url) => {
    setApiBase(url);
    setApiBaseState(url);
  }, []);

  return [apiBase, handleApiChange];
}
