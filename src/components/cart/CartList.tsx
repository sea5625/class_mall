import React from "react";
import { ProductModel } from "../../apis/products";
import CartCard from "./CartCard";

type Props = {
    cartItemList: ProductModel[];
    setChecked: (id) => void;
    checked: string[];
};
const CartList = ({ cartItemList, setChecked, checked }: Props) => {
    const makeCardList = () => {
        if (cartItemList.length) {
            return cartItemList.map((cartItem, key) => (
                <CartCard
                    key={key}
                    {...cartItem}
                    setChecked={setChecked}
                    checked={checked}
                />
            ));
        }
    };
    return <div>{makeCardList()}</div>;
};

export default CartList;
