const defaultState = {};

export const sampleReducer = (
  state = defaultState,
  action: { type: string, payload: any },
) => {
  switch (action.type) {
    default:
      return state;
  }
};
