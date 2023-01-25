export type LocalStorageItem = any;

export type UseLocalStorageHook = [
  getItem: LocalStorageItem,
  setItem: (newValue: LocalStorageItem) => void
];

export type UseLocalStorageProps = {
  name: string,
  defaultItem?: any
};