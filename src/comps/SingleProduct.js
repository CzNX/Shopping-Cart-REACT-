import React from "react";
import { Card, Button } from "react-bootstrap";
import Ratings from "./Ratings";
import { useMainContext } from "../context/Context";

const SingleProduct = ({
  id,
  name,
  image,
  price,
  ratings,
  inStock,
  fastDelivery,
  prod,
}) => {
  const {
    dispatch,
    state: { cart },
  } = useMainContext();
  return (
    <div className="product">
      <Card className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body className="card-body">
          <Card.Title className="card_name">{name}</Card.Title>
          <Card.Text className="subs">
            <span className="price">Rs. {price.split(".")[0]}</span>
            <small className="fastDelivery">{`${
              fastDelivery ? "Fast Delivery" : "7 Days Delivery"
            }`}</small>
            <span className="ratings">
              <Ratings rating={ratings} />
            </span>
          </Card.Text>
          <div className="btns">
            {cart.some((p) => p.id === id) ? (
              <Button
                onClick={() => dispatch({ type: "del-from-cart", payload: id })}
                variant="danger"
              >
                Remove From Cart
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() => dispatch({ type: "add-to-cart", payload: prod })}
                disabled={!inStock}
              >{`${inStock ? "Add To Cart" : "Out Of Stock"}`}</Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
