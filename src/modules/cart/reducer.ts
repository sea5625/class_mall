import { createReducer } from "typesafe-actions";
import { CartState, CartAction } from "./types";
import { FETCH_ADD_CART_ITEM, FETCH_REMOVE_CART_ITEM } from "./actions";

const initialState: CartState = {
    cart: {
        error: "",
        cartItems: []
    }
};

const cart = createReducer<CartState, CartAction>(initialState, {
    [FETCH_ADD_CART_ITEM]: (state, action) => ({
        ...state,
        cart: {
            error: "",
            cartItems: [...state.cart.cartItems].concat(action.payload)
        }
    }),
    [FETCH_REMOVE_CART_ITEM]: (state, action) => ({
        ...state,
        cart: {
            error: "",
            cartItems: [...state.cart.cartItems].filter(
                el => el !== action.payload
            )
        }
    })
});

export default cart;
