import { Card, Caption1, Colors, Checkbox } from "@class101/ui";
import { numberWithCommas } from "../../utills/utills";

type Props = {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    availableCoupon?: undefined | boolean;
    setChecked: (id) => void;
    checked: string[];
};

const CartCard = ({ id, title, coverImage, price, availableCoupon }: Props) => {
    return (
        <div style={{ marginTop: "2rem" }}>
            <Card
                title={title}
                coverImage={coverImage}
                extraTop={
                    <div style={{ marginTop: "1rem" }}>
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
                extraBottom={
                    <div style={{ marginBottom: "1rem" }}>
                        {" "}
                        <Checkbox size={18}>Check3</Checkbox>
                    </div>
                }
            ></Card>
            <hr />
        </div>
    );
};

export default CartCard;
