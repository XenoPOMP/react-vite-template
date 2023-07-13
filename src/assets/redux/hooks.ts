import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '@redux/index';

/**
 * App dispatch hook. Type-safe.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/**
 * Typed useSelector hook.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
