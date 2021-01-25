import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, ProductCardList } from "../components";
import { RootState } from "../modules";
import { getProductsAsync } from "../modules/products";
import { Section, Spinner, Button, Grid, Row, Col } from "@class101/ui";

const ProductsContainer = props => {
    const dispatch = useDispatch();

    const { data, loading } = useSelector(
        (state: RootState) => state.products.products
    );

    const { cartItems } = useSelector((state: RootState) => state.cart.cart);

    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(getProductsAsync.request(page));
    }, [page]);

    return (
        <div style={{ padding: "2.5rem 0" }}>
            <Grid>
                <Row>
                    <Col lg={10}>
                        <Section
                            title="상품 목록 페이지"
                            titleStyle={{
                                typography: "Headline3"
                            }}
                            description="장바구니에 원하는 클래스를 담아보세요"
                        ></Section>
                    </Col>
                    <Col lg={2}>
                        <Button
                            size={"md"}
                            color={"orange"}
                            disabled={cartItems.length === 0}
                            onClick={() => props.history.push("/cart")}
                        >
                            장바구니 이동 ({cartItems.length}) 건
                        </Button>
                    </Col>
                </Row>
                {loading && <Spinner size={50} />}
                {data && <ProductCardList products={data.products} />}
                <Row>
                    <Col lg={12}>
                        <Pagination
                            page={page}
                            setPage={_page => {
                                setPage(_page);
                            }}
                            total={data?.total}
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

export default ProductsContainer;
