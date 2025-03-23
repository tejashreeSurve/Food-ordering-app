import { IMAGE_URL } from "../utils/constants";
import React, { useContext, Profiler } from "react";
import { UserContext } from "../utils/context";

export const RestroCard = ({ restro }) => {
  const { name, avgRating, cloudinaryImageId, cuisines } = restro.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    // <Profiler id="RestroCard" onRender={onRender}>
    <div
      className="w-50 p-3 bg-gray-200 rounded h-full hover:shadow-lg grid"
      data-testid="restCard"
    >
      <img
        src={`${IMAGE_URL}${cloudinaryImageId}`}
        className="w-full h-30 rounded"
      />
      <h2 className="font-bold py-3">{name} </h2>
      <h3 className="text-xs">{cuisines.join(", ")}</h3>
      <h4>
        {"⭐⭐⭐"}
        <span className="font-medium">{avgRating}</span>
      </h4>
      <span>{loggedInUser}</span>
    </div>
  );
};

export const withPromotedLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <span className="p-1 text-white bg-gray-900 rounded absolute">
          Open
        </span>
        <RestroCard {...props} />
      </div>
    );
  };
};

function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(id);
  console.log(phase);
  console.log(actualDuration);
  console.log(baseDuration);
  console.log(startTime);
  console.log(commitTime);
}
