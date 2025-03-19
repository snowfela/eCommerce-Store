import ItemsAdded from "./ListReducer.js";
import CartItemsAdded from "./CartReducer.js";
import OrderAdded from "./OrderReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  ItemsAdded,
  CartItemsAdded,
  OrderAdded,
});

export default rootReducer;
