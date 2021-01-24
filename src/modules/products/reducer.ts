import { createReducer } from "typesafe-actions";
import { ProductsState, ProductsAction } from "./types";
import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
} from "./actions";

const initialState: ProductsState = {
    products: {
        loading: false,
        error: null,
        data: null
    }
};

const products = createReducer<ProductsState, ProductsAction>(initialState, {
    [GET_PRODUCTS_REQUEST]: state => ({
        ...state,
        products: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_PRODUCTS_SUCCESS]: (state, action) => ({
        ...state,
        products: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_PRODUCTS_FAILURE]: (state, action) => ({
        ...state,
        products: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default products;
