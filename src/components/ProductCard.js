import React from "react";

import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
    Button,
} from "reactstrap";

const ProductCard = ({ product, addCartItem }) => {
    return (
        <Card className="mt-3 mb-1 h-100px">
            <CardImg top height={250} width="100%" src={product.smallImage} />
            <CardBody className="text-center">
                <CardTitle className="text-primary text-center text-truncate">
                    {product.productName}
                </CardTitle>

                <CardText>
                    <span>Price:{product.price}</span>
                </CardText>

                <Button onClick={() => addCartItem(product)} color="success">
                    Add To Cart
                </Button>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
