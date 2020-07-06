import actions from "../actions";

export default function allStoredGifts(state = {}, action) {
  switch (action.type) {
    case actions.STORE_ALL_GIFTS:
      return action.payload;
    default:
      return state;
  }
}
