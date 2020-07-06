import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import currentGift from "./reducers/currentGift";
import newCreatedGift from "./reducers/newCreatedGift";
import allStoredGifts from "./reducers/allStoredGifts";

export default combineReducers({
  currentUser,
  currentGift,
  newCreatedGift,
  allStoredGifts,
});
