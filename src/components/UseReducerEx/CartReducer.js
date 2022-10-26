import React from "react";
import { useReducer } from "react";

const initialState = {
  items: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      let updatedItems;
      const index = state.items.findIndex((val) => val.id === action.item.id);
      if (index === -1) {
        const obj = { ...action.item, quantity: 1 };
        updatedItems = state.items.concat(obj);
      } else {
        const modified = Object.assign({}, state.items[index]);
        modified.quantity = modified.quantity + 1;
        updatedItems = [...state.items];
        updatedItems[index] = modified;
      }
      return {
        items: updatedItems,
      };
    default:
      return initialState;
  }
};

const CartReducer = () => {
  const items = [
    {
      id: 1,
      item: "Book",
    },
    {
      id: 2,
      item: "Pen",
    },
    {
      id: 3,
      item: "Watch",
    },
  ];
  const [cart, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ul>
        {items.map((val) => (
          <li key={val.id} onClick={() => dispatch({ type: "ADD", item: val })}>
            {val.item}
          </li>
        ))}
      </ul>
      <h3>Cart Items</h3>
      {cart.items.map((item) => (
        <p key={item.id}>
          {item.item} quantity : {item.quantity}
        </p>
      ))}
    </div>
  );
};

export default CartReducer;
