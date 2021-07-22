import React from "react";
import { useMainContext } from "../context/Context";
import Filter from "./Filter";
import Header from "./Header";
import SingleProduct from "./SingleProduct";
const Home = () => {
  const {
    state: { products },
    filterState: { sort, stock, fastDelivery, rating, search },
  } = useMainContext();

  // func for filter
  const transformedProducts = () => {
    let sortedProducts = products;

    if (!stock) {
      sortedProducts = sortedProducts.filter((i) => i.inStock);
    }
    if (fastDelivery) {
      sortedProducts = sortedProducts.filter((i) => i.fastDelivery);
    }
    if (rating) {
      sortedProducts = sortedProducts.filter((i) => i.ratings >= rating);
    }
    if (search) {
      sortedProducts = sortedProducts.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort) {
      if (sort === "none") {
        return sortedProducts;
      } else {
        sortedProducts = sortedProducts.sort((a, b) =>
          sort === "LTH" ? a.price - b.price : b.price - a.price
        );
      }
    }

    return sortedProducts;
  };

  return (
    <div>
      <Header />
      <div className="mainContainer">
        <Filter />
        <div className="productsContainer">
          {transformedProducts().map((prod) => (
            <SingleProduct {...prod} key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
