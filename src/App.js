import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import CartAdapter from "./pattern/cartAdapter";

function App() {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const cartAdapter = new CartAdapter();

        cartAdapter.getCartItems().then((items) => {
            setCartItem(items);
        });
    }, []);

    const addCartItem = (item) => {
        const cartAdapter = new CartAdapter();

        cartAdapter.addItemCart(cartItem, item).then((item) => {
            if (item === null) {
                toast("already in cart", { type: "error" });
            } else {
                setCartItem([...cartItem, item]);
            }
        });
    };

    const removeCartItem = (item) => {
        const cartAdapter = new CartAdapter();

        cartAdapter.removeItemFromCart(cartItem, item).then((item) => {
            setCartItem(item);
        });
    };

    const buyNow = () => {
        toast("Purchase Complete", {
            type: "success",
        });
        setCartItem([]);
    };

    return (
        <Container>
            <ToastContainer />
            <Row>
                <Col md={8}>
                    <BuyPage addCartItem={addCartItem}></BuyPage>
                </Col>
                <Col md={4}>
                    <Cart
                        removeCartItem={removeCartItem}
                        cartItems={cartItem}
                        buyNow={buyNow}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
