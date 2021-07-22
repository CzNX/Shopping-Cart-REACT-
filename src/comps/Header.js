import React from "react";
import {
  Container,
  Navbar,
  Dropdown,
  Form,
  Badge,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import "./styles.css";
import { useMainContext } from "../context/Context";

const Header = () => {
  const {
    filterDispatch,
    dispatch,
    state: { cart },
  } = useMainContext();
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span style={{ color: "#fff" }}>Xtha</span>
            </Link>
          </Navbar.Brand>

          {useLocation().pathname.split("/")[1] !== "cart" && (
            <Navbar.Text className=" ml-auto d-none d-md-flex">
              <Form.Control
                style={{ width: "500px" }}
                type="search"
                placeholder="seach products..."
                className="search"
                onChange={(e) => {
                  e.preventDefault();
                  filterDispatch({
                    type: "search",
                    payload: e.target.value,
                  });
                }}
              />
            </Navbar.Text>
          )}

          <Dropdown className="ml-auto">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FiShoppingCart />
              <Badge
                className="badge"
                bg="secondary"
                style={{ marginLeft: 10 }}
              >
                ({cart.length})
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu align="right" style={{ minWidth: 370 }}>
              {cart.length > 0 ? (
                <div className="main_summary">
                  {cart.map((prod) => (
                    <div key={prod.id}>
                      <li className="cart_list">
                        <img className="cart_img" src={prod.image} alt="err" />
                        <div className="summary">
                          <span>{prod.name}</span>
                          <span>Rs. {prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer", color: "red" }}
                          onClick={() =>
                            dispatch({
                              type: "del-from-cart",
                              payload: prod.id,
                            })
                          }
                        />
                      </li>
                      <hr />
                    </div>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </div>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
