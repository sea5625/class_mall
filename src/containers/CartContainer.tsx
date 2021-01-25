import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getCouponsAsync } from "../modules/coupons";

const CartContainer = () => {
    const { data, loading } = useSelector(
        (state: RootState) => state.coupons.coupons
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCouponsAsync.request(null));
    }, []);

    return <div>CartContainer</div>;
};

export default CartContainer;
