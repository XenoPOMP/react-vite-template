import { useCallback } from 'react';

type UseLocalStorageType<T> = [getItem: T, setItem: (newValue: T) => void];

export const useLocalStorage = <T>(
  name: string,
  defaultItem?: T,
): UseLocalStorageType<T> => {
  const getItem = localStorage.getItem(name);
  const setItem = useCallback((newValue: T) => {
    localStorage.setItem(name, JSON.stringify(newValue));
  }, []);

  // Check if state is not created
  if (!getItem) {
    localStorage.setItem(name, JSON.stringify(defaultItem));
  }

  return [getItem ? JSON.parse(getItem) : defaultItem, setItem];
};
