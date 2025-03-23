import React, { useState } from "react";
import ItemList from "./ItemList";
import { ExpandLess, ExpandMore } from "../utils/icons";

function RestaurantCaegory({ details, showIndexBody, setShowIndex }) {
  return (
    <div
      className="w-6/12 mx-auto my-3 p-2 bg-gray-100 shadow-md cursor-pointer rounded"
      onClick={() => setShowIndex()}
      data-testid="menu-list"
    >
      <div className="flex justify-between p-3">
        <span
          className="font-bold text-sm capitalize
        "
        >
          {details?.title} ({details?.itemCards?.length})
        </span>
        <span
          className="material-icons  transition-transform duration-400"
          style={{
            transform: showIndexBody ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {showIndexBody ? <ExpandLess /> : <ExpandMore />}
        </span>
      </div>
      <div
        className={`overflow-visible transition-all duration-500 ease-in-out ${
          showIndexBody ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {showIndexBody ? <ItemList items={details?.itemCards} /> : null}
      </div>
    </div>
  );
}

export default RestaurantCaegory;
