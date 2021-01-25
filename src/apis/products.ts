import axios from "axios";
import { PAGINATION_LIMIT } from "../utills/const";

export async function getAllProducts() {
    const response: any = await axios.get<ProductModel>(
        `http://localhost:4000/products`
    );
    return response;
}

export async function getProducts(payload: number) {
    const response = await getAllProducts();
    const indexOf = payload === 1 ? 0 : PAGINATION_LIMIT * (payload - 1);
    return {
        products: [...response.data]
            .sort((a, b) => b.score - a.score)
            .splice(indexOf, PAGINATION_LIMIT),
        total: response.length
    };
}

export interface ProductModel {
    id: string;
    title: string;
    coverImage: string;
    price: number;
    score: number;
    availableCoupon?: undefined | boolean;
}
