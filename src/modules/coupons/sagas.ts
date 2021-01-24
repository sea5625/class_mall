import { getCouponsAsync, GET_COUPONS_REQUEST } from "./actions";
import { getCoupons, CouponModel } from "../../apis/coupons";
import { call, put, takeEvery } from "redux-saga/effects";

function* getCouponsSaga() {
    try {
        const coupons: CouponModel[] = yield call(getCoupons);
        yield put(getCouponsAsync.success(coupons));
    } catch (e) {
        yield put(getCouponsAsync.failure(e));
    }
}

export function* couponsSaga() {
    yield takeEvery(GET_COUPONS_REQUEST, getCouponsSaga);
}
