import { useState, useEffect } from 'react';

const sessionGet = (key) => {
  try {
    return JSON.parse(window.sessionStorage.getItem(key));
  } catch {
    return null;
  }
};

const sessionSet = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const useSessionStorageState = (defaultValue, key) => {
  const stateDefaultValue = sessionGet(key) ?? defaultValue;
  const [state, setState] = useState(stateDefaultValue);

  const setSessionStorageState = (value) => {
    setState(value);
  };
  useEffect(() => {
    sessionSet(key, state);
  }, [key, state]);

  return [state, setSessionStorageState];
};
