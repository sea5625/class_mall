import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { CouponModel } from "../../apis/coupons";

export type CouponsAction = ActionType<typeof actions>;

export type CouponsState = {
    coupons: {
        loading: boolean;
        error: Error | null;
        data: CouponModel[] | null;
    };
};
