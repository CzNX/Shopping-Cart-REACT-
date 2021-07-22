export const Reducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "del-from-cart":
      return {
        ...state,
        cart: state.cart.filter((i) => i.id !== action.payload),
      };
    case "change_qty":
      return {
        ...state,
        cart: state.cart.filter((i) =>
          i.id === action.payload.id ? (i.qty = action.payload.qty) : i.qty
        ),
      };
    default:
      return state;
  }
};

// product filter reducer

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "sort":
      return { ...state, sort: action.payload };
    case "stock":
      return { ...state, stock: !state.stock };
    case "fd":
      return { ...state, fastDelivery: !state.fastDelivery };
    case "clear":
      return { sort: "none", stock: false, fastDelivery: false, rating: 0 };
    case "rating":
      return { ...state, rating: action.payload };
    case "search":
      return { ...state, search: action.payload };

    default:
      return state;
  }
};

export default Reducer;
