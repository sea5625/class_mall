import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { ProductModel } from "../../apis/products";

export type ProductsAction = ActionType<typeof actions>;

export type ProductsState = {
    products: {
        loading: boolean;
        error: Error | null;
        data: ProductModel[] | null;
    };
};
