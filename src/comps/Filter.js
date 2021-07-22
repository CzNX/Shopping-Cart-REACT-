import React from "react";
import { Button, Form } from "react-bootstrap";
import { useMainContext } from "../context/Context";
import Ratings from "./Ratings";

const Filter = () => {
  const {
    filterDispatch,
    filterState: { sort, stock, fastDelivery, rating },
  } = useMainContext();
  return (
    <div className="filter">
      <h3 className="filter-title">Filter products</h3>
      <Form className="form">
        <Form.Check
          inline
          label="Ascending"
          name="group1"
          type="radio"
          id={`inline-2`}
          className="form-input"
          onChange={() =>
            filterDispatch({
              type: "sort",
              payload: "LTH",
            })
          }
          checked={sort === "LTH" ? true : false}
        />
        <Form.Check
          inline
          label="Descending"
          name="group1"
          type="radio"
          id={`inline-2`}
          className="form-input"
          onChange={() =>
            filterDispatch({
              type: "sort",
              payload: "HTL",
            })
          }
          checked={sort === "HTL" ? true : false}
        />
        <Form.Check
          inline
          label="Include Out Of Stock"
          name="group1"
          type="checkbox"
          id={`inline-1`}
          className="form-input"
          onChange={() =>
            filterDispatch({
              type: "stock",
            })
          }
          checked={stock}
        />
        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id={`inline-2`}
          className="form-input"
          onChange={() =>
            filterDispatch({
              type: "fd",
            })
          }
          checked={fastDelivery}
        />

        <span className="form-input">
          <Ratings
            rating={rating}
            r_handler={(i) => {
              filterDispatch({
                type: "rating",
                payload: i + 1,
              });
            }}
          />
        </span>
        <Button
          className="clear"
          variant="success"
          onClick={() =>
            filterDispatch({
              type: "clear",
            })
          }
        >
          Clear Filter
        </Button>
      </Form>
    </div>
  );
};

export default Filter;
