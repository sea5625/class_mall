import axios from "axios";

export async function getProducts() {
    const response = await axios.get<ProductModel>(
        `http://localhost:4000/products`
    );
    return response.data;
}

export interface ProductModel {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon?: undefined | boolean;
}
