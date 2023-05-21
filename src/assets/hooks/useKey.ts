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
 */
export const useKey = (
	// key: Lowercase<keyof typeof Key>,
	key: keyof typeof KeyCodes,
	callback: (event?: KeyboardEvent) => any
) => {
	const callbackRef = useRef<Parameters<typeof useKey>[1]>(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, []);

	useEffect(() => {
		const handle = (event: KeyboardEvent) => {
			if (event.code === KeyCodes[key]) {
				callbackRef.current(event);
			}
		};

		// @ts-ignore
		document.addEventListener('keypress', handle);

		// @ts-ignore
		return () => document.removeEventListener('keypress', handle);
	}, [key]);
};
