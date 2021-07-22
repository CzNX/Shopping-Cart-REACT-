import { useContext, useReducer } from "react";
import { createContext } from "react";
// data import
import faker from "faker";
import { filterReducer, Reducer as reducer } from "./Reducer";

const appProvider = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 1, 3, 5, 6]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

  // add /remove /change qty Cart specific reducer

  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: [],
  });

  // reducer to filter home products
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    sort: "none",
    stock: false,
    fastDelivery: false,
    rating: 0,
    search: "",
  });

  return (
    <appProvider.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </appProvider.Provider>
  );
};
// custom hooks
export const useMainContext = () => useContext(appProvider);

export default Context;
