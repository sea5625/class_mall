import { createAsyncAction } from "typesafe-actions";
import { ProductModel } from "../../apis/products";
import { AxiosError } from "axios";

export const GET_PRODUCTS_REQUEST = "products/GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "products/GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "products/GET_PRODUCTS_FAILURE";

export const getProductsAsync = createAsyncAction(
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILURE
)<null, ProductModel[], AxiosError>();
