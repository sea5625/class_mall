import { getProductsAsync, GET_PRODUCTS_REQUEST } from "./actions";
import { getProducts, ProductModel } from "../../apis/products";
import { call, put, takeEvery } from "redux-saga/effects";

function* getProductsSaga(action) {
    try {
        const response: {
            products: ProductModel[];
            total: number;
        } = yield call(getProducts, action.payload);

        yield put(getProductsAsync.success(response));
    } catch (e) {
        yield put(getProductsAsync.failure(e));
    }
}

export function* productsSaga() {
    yield takeEvery(GET_PRODUCTS_REQUEST, getProductsSaga);
}
