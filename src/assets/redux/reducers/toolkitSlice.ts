import { createSlice } from '@reduxjs/toolkit';
import {
  ToolkitAction,
  ToolkitState,
} from '@redux/types/toolkit-reducer-types';

const initialState: ToolkitState = {
  value: 0,
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {
    increment(state, action: ToolkitAction) {
      state.value += action.payload;
    },
    decrement(state, action: ToolkitAction) {
      console.log(action.payload);
      state.value -= action.payload;
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement } = toolkitSlice.actions;
