import { ProductModel } from "../../apis/products";
import ProductCard from "./ProductCard";
import { Row } from "@class101/ui";

type Props = {
    products: ProductModel[];
};

const ProductCardList = ({ products = [] }: Props) => {
    const makeCardList = () => {
        if (products.length) {
            return products.map((product, key) => (
                <ProductCard key={key} {...product} />
            ));
        }
        return <p>진열된 상품이 없습니다.</p>;
    };
    return <Row>{makeCardList()}</Row>;
};

export default ProductCardList;
