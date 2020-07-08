import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import editableGift from "./reducers/editableGift";

export default combineReducers({
  currentUser,
  editableGift,
});
