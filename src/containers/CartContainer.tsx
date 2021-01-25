import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getCouponsAsync } from "../modules/coupons";
import { Section, Grid, Row, Col } from "@class101/ui";
import { CartList } from "../components";
import { getAllProducts } from "../apis/products";

const CartContainer = () => {
    const { data, loading } = useSelector(
        (state: RootState) => state.coupons.coupons
    );

    const [cartItemList, setCartItemList] = useState([]);
    const [checked, setChecked] = useState([]);

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: RootState) => state.cart.cart);

    useEffect(() => {
        dispatch(getCouponsAsync.request(null));
        makeCartItems();
    }, []);

    const makeCartItems = async () => {
        let arr = [] as any;
        const { data: allProducts } = await getAllProducts();
        allProducts.forEach(product => {
            if (cartItems.includes(product.id)) {
                arr.push(product);
            }
        });
        setCartItemList(arr);
    };

    return (
        <div style={{ padding: "2.5rem 0" }}>
            <Grid>
                <Row>
                    <Col lg={12}>
                        <Section
                            title="장바구니 페이지"
                            titleStyle={{
                                typography: "Headline3"
                            }}
                            description="이제 결제를 시작 해볼까요?"
                        ></Section>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5}>
                        <Section
                            title="현재 선택 품목"
                            titleStyle={{
                                typography: "Subtitle1",
                                color: "orange"
                            }}
                        ></Section>
                        <CartList
                            cartItemList={cartItemList}
                            setChecked={setChecked}
                            checked={checked}
                        />
                    </Col>
                    <Col lg={7}>
                        <Section
                            title="결제 예정 금액"
                            titleStyle={{
                                typography: "Subtitle1",
                                color: "orange"
                            }}
                        ></Section>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default CartContainer;
