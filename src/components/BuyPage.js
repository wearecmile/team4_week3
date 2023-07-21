import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Axios from "axios";
import { commerce, random } from "faker";
import ProductCard from "./ProductCard";

const url = "https://api.npoint.io/09c4fe0703d4313761c9";
const BuyPage = ({ addCartItem }) => {
    const [products, setProducts] = useState([]);
    const getPhotos = async () => {
        const { data } = await Axios.get(url);
        const { photos } = data;

        const allProducts = photos.map((photo) => ({
            smallImage: photo.src.small,
            tinyImage: photo.src.tiny,
            price: commerce.price(),
            productName: commerce.productName(),
            id: random.uuid(),
        }));

        setProducts(allProducts);
    };

    useEffect(() => {
        getPhotos();
    }, []);

    return (
        <Container>
            <h1 className="text-center text-success">Buy Page</h1>
            <Row>
                {products.map((product) => (
                    <Col md={4}>
                        <ProductCard
                            product={product}
                            addCartItem={addCartItem}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BuyPage;
