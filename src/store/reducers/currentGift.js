import actions from "../actions";

export default function currentGift(state = {}, action) {
  switch (action.type) {
    case actions.STORE_CURRENT_GIFT:
      return (state = "current gift");
    default:
      return state;
  }
}
