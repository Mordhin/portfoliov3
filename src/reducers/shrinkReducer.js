const screen = document.documentElement.clientWidth || window.innerWidth;
let defaultState = false;
if (screen < 800) defaultState = true;

const ShrinkReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SHRINK":
      return action.payload
    default:
      return state;
  }
}

export default ShrinkReducer;