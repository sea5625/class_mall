import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

//* Saga
import { productsSaga } from "./products";
import { couponsSaga } from "./coupons";

//* Reducer
import products from "./products/reducer";
import coupons from "./coupons/reducer";

//* Root reducer
const rootReducer = combineReducers({
    products,
    coupons
});

export default rootReducer;

//* Root state = currentState(state.products, state.coupons)
export type RootState = ReturnType<typeof rootReducer>;

//* Root saga
export function* rootSaga() {
    yield all([productsSaga(), couponsSaga()]);
}
