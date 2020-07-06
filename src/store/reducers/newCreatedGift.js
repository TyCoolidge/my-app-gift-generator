import actions from "../actions";

export default function newCreatedGift(state = {}, action) {
  switch (action.type) {
    case actions.STORE_NEW_CREATED_GIFT:
      return action.payload;
    default:
      return state;
  }
}
