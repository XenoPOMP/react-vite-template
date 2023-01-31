import { createSlice } from '@reduxjs/toolkit';
import { ToolkitState } from '@redux/types/toolkit-reducer-types';
import { ReduxAction } from '@redux/types/redux-types';

const initialState: ToolkitState = {
  value: 0,
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    increment(state, action: ReduxAction<number>) {
      state.value += action.payload;
    },
    decrement(state, action: ReduxAction<number>) {
      console.log(action.payload);
      state.value -= action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement } = toolkitSlice.actions;
