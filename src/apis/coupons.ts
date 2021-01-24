import axios from "axios";

export async function getCoupons() {
    const response = await axios.get<CouponModel>(
        `http://localhost:4000/coupons`
    );
    return response.data;
}

export interface CouponModel {
    type: string;
    title: string;
    discountRate?: null | number;
    discountAmount?: null | number;
}
