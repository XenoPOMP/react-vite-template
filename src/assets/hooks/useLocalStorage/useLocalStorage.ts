import {
  UseLocalStorageHook,
  UseLocalStorageProps,
} from '@hooks/useLocalStorage/use-local-store-types';

export const useLocalStorage = (
  props: UseLocalStorageProps,
): UseLocalStorageHook => {
  const getItem = localStorage.getItem(props.name);
  const { name, defaultItem } = props;

  // Check if state is not created
  if (!getItem) {
    localStorage.setItem(name, JSON.stringify(defaultItem));
  }

  return [
    getItem ? JSON.parse(getItem) : defaultItem,
    (newValue) => {
      localStorage.setItem(name, JSON.stringify(newValue));
    },
  ];
};
