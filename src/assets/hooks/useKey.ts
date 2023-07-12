import { KeyboardEvent, useEffect, useRef } from 'react';

import { KeyCodes } from '@type/KeyCodes';

/**
 * Hook for keyboard event handling.
 *
 * @example
 * useKey(Key.Enter, event => {
 * 		setMessage('Enter pressed');
 * });
 *
 * @param key                                         target key code.
 * @param {Parameters<typeof useKey>[1]} callback			callback that will be called
 * 																										in key press moment.
 * @param options                                     hook options.
 */
export const useKey = (
  // key: Lowercase<keyof typeof Key>,
  key: keyof typeof KeyCodes,
  callback: (event?: KeyboardEvent) => any,
  options?: {
    control?: boolean;
    shift?: boolean;
  },
) => {
  const callbackRef = useRef<Parameters<typeof useKey>[1]>(callback);

  const defaultOptions: Parameters<typeof useKey>[2] = {
    control: false,
    shift: false,
    ...options,
  };

  useEffect(() => {
    callbackRef.current = callback;
  }, []);

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (
        event.code === KeyCodes[key] &&
        defaultOptions.control === event.ctrlKey &&
        defaultOptions.shift === event.shiftKey
      ) {
        callbackRef.current(event);
      }
    };

    // @ts-ignore
    document.addEventListener('keypress', handle);

    // @ts-ignore
    return () => document.removeEventListener('keypress', handle);
  }, [key]);
};
