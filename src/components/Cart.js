import React from "react";

import {
    ListGroup,
    ListGroupItem,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardHeader,
    CardFooter,
    CardText,
    Button,
} from "reactstrap";

const Cart = ({ removeCartItem, buyNow, cartItems }) => {
    let amount = 0;

    cartItems.forEach((item) => {
        amount = parseFloat(amount) + parseFloat(item.price);
    });
    return (
        <ListGroup>
            <h1 className="text-success mt-3 mb-3 text-center">
                Shopping Cart
            </h1>
            {cartItems.map((item) => (
                <ListGroupItem key={item.id} className="mt-2">
                    <Row>
                        <Col md={3}>
                            <img
                                src={item.tinyImage}
                                height={100}
                                width={100}
                            />
                        </Col>
                        <Col md={4} className="offset-md-1">
                            <div className="text-center">
                                <CardTitle className="text-primary">
                                    {item.productName}
                                </CardTitle>
                                <CardText>Price:{item.price}</CardText>
                            </div>
                        </Col>

                        <Col md={3}>
                            <span className="text-center">
                                <Button
                                    className="mt-3"
                                    onClick={() => removeCartItem(item)}
                                    color="danger"
                                >
                                    Remove
                                </Button>
                            </span>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}

            {cartItems.length >= 1 ? (
                <Card className="mt-5 ">
                    <CardHeader>Buy Here</CardHeader>
                    <CardBody>
                        <CardText>
                            <span>
                                You Buy {cartItems.length} of price RS:{amount}{" "}
                            </span>
                        </CardText>
                    </CardBody>
                    <CardFooter>
                        <Button onClick={buyNow} color="warning">
                            Buy Now
                        </Button>
                    </CardFooter>
                </Card>
            ) : (
                <h1 className="text-info mt-3 mb-3 text-center">
                    {" "}
                    Your Cart is Empty{" "}
                </h1>
            )}
        </ListGroup>
    );
};

export default Cart;
