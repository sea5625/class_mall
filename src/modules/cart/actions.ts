import { createAction } from "typesafe-actions";

export const FETCH_ADD_CART_ITEM = "cart/FETCH_ADD_CART_ITEM";
export const FETCH_REMOVE_CART_ITEM = "cart/FETCH_REMOVE_CART_ITEM";

export const fetchAddCartItem = createAction(FETCH_ADD_CART_ITEM)<string>();
export const fetchRemoveCartItem = createAction(FETCH_REMOVE_CART_ITEM)<
    string
>();
