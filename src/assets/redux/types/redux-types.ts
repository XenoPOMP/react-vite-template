import { ToolkitState } from '@redux/types/toolkit-reducer-types';

export type StoreType = {
  toolkit: ToolkitState,
};

export type ReduxAction<A> = {
  payload: A,
  type: string,
};
