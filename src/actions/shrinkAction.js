export const ShrinkAction = () => (dispatch, getState) => {
  const reversedShrink = !getState().Shrink;
  dispatch ({
    type: "SHRINK",
    payload: reversedShrink,
  });
};