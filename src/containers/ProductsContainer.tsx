import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getProductsAsync } from "../modules/products";

const ProductsContainer = () => {
    const { data, loading, error } = useSelector(
        (state: RootState) => state.products.products
    );
    const dispatch = useDispatch();
    console.log(data, loading, error, "???");

    useEffect(() => {
        dispatch(getProductsAsync.request(null));
    }, []);

    return <div>ProductsContainer</div>;
};

export default ProductsContainer;
