import { getProductsAsync, GET_PRODUCTS_REQUEST } from "./actions";
import { getProducts, ProductModel } from "../../apis/products";
import { call, put, takeEvery } from "redux-saga/effects";

function* getProductsSaga() {
    try {
        const products: ProductModel[] = yield call(getProducts);
        yield put(getProductsAsync.success(products));
    } catch (e) {
        yield put(getProductsAsync.failure(e));
    }
}

export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS_REQUEST, getProductsSaga);
}
