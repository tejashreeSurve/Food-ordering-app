import React from "react";
import { IMAGE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utils/cartSlice";

function ItemList({ items, isInCart }) {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.items);

  return (
    <>
      {items.map((item, index) => {
        const { name, id, description, imageId, defaultPrice, price } =
          item?.card?.info;

        const itemLength = cart.filter(
          (cartItem) => cartItem.card.info.id === id
        );

        return (
          <div
            data-testid="item-menu"
            key={id}
            className={`p-3 flex flex-row gap-2 ${
              index === items?.length - 1 ? "" : "border-b-1"
            } border-gray-300`}
          >
            <div className="flex flex-col basis-3/4">
              <span className="text-sm font-medium">
                {name} - ₹{price ? price / 100 : defaultPrice / 100}
              </span>
              <span className="text-xs py-3">{description}</span>
            </div>
            <div className="basis-1/4 relative">
              <img src={IMAGE_URL + imageId} className="w-40 h-25 rounded" />
              {!isInCart ? (
                itemLength.length ? (
                  <AddMinueButton count={itemLength.length} item={item} />
                ) : (
                  <button
                    type="button"
                    className="p-3 rounded flex bg-white text-gray-900 w-20 justify-center hover:bg-gray-200 content-center items-center font-medium absolute inset-x-0 -bottom-2 left-10 h-8 shadow-xl"
                    onClick={(event) => {
                      event.stopPropagation();
                      dispatch(addItems(item));
                    }}
                  >
                    + Add
                  </button>
                )
              ) : null}
            </div>
          </div>
        );
      })}
    </>
  );
}

function AddMinueButton({ count, item }) {
  const dispatch = useDispatch();
  const buttonClassName = "px-2 py-1 bg-gray-200 border rounded font-bold";

  return (
    <div className="flex flex-row py-1 justify-center">
      <button
        className={buttonClassName}
        onClick={(event) => {
          event.stopPropagation();
          dispatch(addItems(item));
        }}
      >
        +
      </button>
      <span className="px-2 py-1 text-lg font-bold">{count}</span>
      <button className={buttonClassName}>-</button>
    </div>
  );
}

export default ItemList;
