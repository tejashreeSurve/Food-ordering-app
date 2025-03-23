import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="p-5 w-6/12 flex flex-col justify-self-center" >
      <div className="flex justify-between">
        <span className="p-4 flex text-xl font-bold">Cart ({cart.length})</span>
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="bg-gray-300 border border-gray-400 rounded p-3"
        >
          Clear cart
        </button>
      </div>
      {cart.length ? (
        <ItemList items={cart} isInCart={true} />
      ) : (
        <span className="text-lg font-medium m-4 justify-self-center">
          No items
        </span>
      )}
    </div>
  );
}

export default Cart;
