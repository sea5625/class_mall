import { createReducer } from "typesafe-actions";
import { CouponsState, CouponsAction } from "./types";
import {
    GET_COUPONS_REQUEST,
    GET_COUPONS_SUCCESS,
    GET_COUPONS_FAILURE
} from "./actions";

const initialState: CouponsState = {
    coupons: {
        loading: false,
        error: null,
        data: null
    }
};

const coupons = createReducer<CouponsState, CouponsAction>(initialState, {
    [GET_COUPONS_REQUEST]: state => ({
        ...state,
        coupons: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_COUPONS_SUCCESS]: (state, action) => ({
        ...state,
        coupons: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_COUPONS_FAILURE]: (state, action) => ({
        ...state,
        coupons: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default coupons;
