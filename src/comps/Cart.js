import React, { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useMainContext } from "../context/Context";
import Header from "./Header";
import Ratings from "./Ratings";

const Cart = () => {
  const {
    dispatch,
    state: { cart },
  } = useMainContext();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <>
      <Header />
      <div className="mainContainer">
        <div className="productsContainer">
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt="err" fluid rounded></Image>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>Rs. {prod.price}</span> <br />
                    <span style={{ fontSize: "14px", fontWeight: 400 }}>
                      Subtotal:Rs. {prod.price * prod.qty}
                    </span>
                  </Col>
                  <Col md={2}>
                    <Ratings rating={prod.ratings} />
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prod.qty}
                      onChange={(e) =>
                        dispatch({
                          type: "change_qty",
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                        })
                      }
                    >
                      {[...Array(prod.inStock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={2}>
                    <Button
                      variant="light"
                      type="button"
                      onClick={() =>
                        dispatch({
                          type: "del-from-cart",
                          payload: prod.id,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filter filter-2">
          <span style={{ fontSize: "30px", marginBottom: 20 }}>
            <strong>Subtotal</strong> ({cart.length}) items
          </span>
          <span style={{ fontSize: "20px", marginBottom: 10 }}>
            Total: <small>Rs. {total}</small>
          </span>
          <Button disabled={cart.length === 0}>Proceed to checkout</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
