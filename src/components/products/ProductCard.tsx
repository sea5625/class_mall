import { Card, Caption1, Button, Colors, Col } from "@class101/ui";
import { numberWithCommas } from "../../utills/utills";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAddCartItem,
    fetchRemoveCartItem
} from "../../modules/cart/actions";
import { RootState } from "../../modules";

type Props = {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    availableCoupon?: undefined | boolean;
};

const ProductCard = ({
    id,
    title,
    coverImage,
    price,
    availableCoupon
}: Props) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state: RootState) => state.cart.cart);
    const inCarted = cartItems.includes(id);

    const handleSelectClick = (id: string) => {
        if (!inCarted) {
            if (cartItems.length < 3) {
                alert("장바구니에 해당 상품을 추가하였습니다.");
                dispatch(fetchAddCartItem(id));
            } else {
                alert("장바구니가 꽉 찼습니다");
            }
        } else {
            alert("장바구니에 해당 상품을 삭제하였습니다.");
            dispatch(fetchRemoveCartItem(id));
        }
    };

    return (
        <Col lg={4}>
            <Card
                title={title}
                coverImage={coverImage}
                extraTop={
                    <div style={{ lineHeight: "16px" }}>
                        {availableCoupon === false ? (
                            <Caption1 fontWeight={"Bold"} color={Colors.red500}>
                                쿠폰 사용 불가!
                            </Caption1>
                        ) : (
                            <Caption1
                                fontWeight={"Bold"}
                                color={Colors.green500}
                            >
                                쿠폰 사용 가능!
                            </Caption1>
                        )}
                        <Caption1 fontWeight={"Bold"}>
                            {numberWithCommas(price)}원
                        </Caption1>
                    </div>
                }
            >
                {inCarted ? (
                    <Button
                        color={"blue"}
                        onClick={() => handleSelectClick(id)}
                        size={"xs"}
                    >
                        장바구니 뺴기
                    </Button>
                ) : (
                    <Button
                        color={"blueLight"}
                        onClick={() => handleSelectClick(id)}
                        size={"xs"}
                    >
                        장바구니 담기
                    </Button>
                )}
            </Card>
            <br />
        </Col>
    );
};

export default ProductCard;
