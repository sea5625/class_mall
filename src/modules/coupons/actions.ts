import { createAsyncAction } from "typesafe-actions";
import { CouponModel } from "../../apis/coupons";
import { AxiosError } from "axios";

export const GET_COUPONS_REQUEST = "products/GET_COUPONS_REQUEST";
export const GET_COUPONS_SUCCESS = "products/GET_COUPONS_SUCCESS";
export const GET_COUPONS_FAILURE = "products/GET_COUPONS_FAILURE";

export const getCouponsAsync = createAsyncAction(
    GET_COUPONS_REQUEST,
    GET_COUPONS_SUCCESS,
    GET_COUPONS_FAILURE
)<null, CouponModel[], AxiosError>();
