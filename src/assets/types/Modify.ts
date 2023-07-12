/**
 * Modifies K (Key) in T (Type), replace it with R (Replacement).
 *
 * @example
 * type ExcludedStore = Modify<IStore, 'appSettings', { appName: 'Simple name' }>; // Key in IStore has been replaced with new type.
 */
export type Modify<T, K extends keyof T, R extends any> = Omit<T, K> & {
  [Key in K]: R;
};
