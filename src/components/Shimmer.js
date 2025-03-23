import React from "react";

function Shimmer() {
  return (
    <div className="flex flex-wrap gap-3 p-3">
      {Array(15)
        .fill()
        .map((_, index) => (
          <div
            className="w-50 p-3 bg-gray-200 rounded h-70 grid"
            key={index}
          ></div>
        ))}
    </div>
  );
}

export default Shimmer;
