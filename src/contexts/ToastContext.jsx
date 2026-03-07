import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/common/Toast';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const [duration, setDuration] = useState(2000);

  const showToast = useCallback((msg, dur = 2000) => {
    setDuration(dur);
    setMessage(msg);
  }, []);

  const clearToast = useCallback(() => {
    setMessage(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, clearToast }}>
      {children}
      <Toast message={message} duration={duration} onExpire={clearToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) return { showToast: () => {}, clearToast: () => {} };
  return ctx;
}
