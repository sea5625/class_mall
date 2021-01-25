import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type CartAction = ActionType<typeof actions>;

export type CartState = {
    cart: {
        error: string;
        cartItems: string[];
    };
};
