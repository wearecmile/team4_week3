import React, { useEffect, useRef, useState } from "react";
import Icon from "./components/Icon";

import "bootstrap/dist/css/bootstrap.css";
import { Container, Card, CardBody, Row, Col, Button } from "reactstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import GameAdapter from "./pattern/Adapter";

function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [ItemArray, setItemArray] = useState([]);

  const adapter = new GameAdapter();

  useEffect(() => {
    adapter.getArray().then((array) => {
      setItemArray(array);
    });
  }, []);

  const reloadGame = () => {
    adapter.reloadGame().then((item) => {
      setIsCross(false);
      setWinMessage("");
      setItemArray(item);
    });
  };

  const changeItem = (ItemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }

    if (ItemArray[ItemNumber] === "empty") {
      ItemArray[ItemNumber] = isCross ? "cross" : "circle";

      setIsCross(!isCross);
    } else {
      return toast("alrady fill", { type: "warning" });
    }

    adapter.checkIsWinner(ItemArray).then((message) => {
      setWinMessage(message);
    });
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-info text-center text-uppercase mb-2">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="mt-2 mb-2 text-danger text-center text-uppercase">
              {isCross ? "cross" : "circle"} Turn
            </h1>
          )}
          <div className="grid">
            {ItemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
