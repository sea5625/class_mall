import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getCouponsAsync } from "../modules/coupons";

const CartContainer = () => {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.coupons.coupons
    );
    const dispatch = useDispatch();
    console.log(data, loading, error, "state");

    useEffect(() => {
        dispatch(getCouponsAsync.request(null));
    }, []);
    return <div>CartContainer</div>;
};

export default CartContainer;
