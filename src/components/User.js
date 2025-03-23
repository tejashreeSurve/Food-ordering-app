import React, { useState } from "react";
import { PropTypes } from "prop-types";

function User({ name, location, handle }) {
  const [count, setCount] = useState(0);
  // behiend the sceans react create a 1 big single object and store all the state variables
  const [count2, setCount2] = useState(1);

  return (
    <div className="user-details">
      <h1>Count = {count}</h1>
      <button type="submit" onClick={() => setCount((count) => count + 1)}>
        Click
      </button>
      <h1>Count2 = {count2}</h1>
      <button type="submit" onClick={() => setCount2((count) => count + 1)}>
        Click
      </button>
      <h1>{name} (function)</h1>
      <h2>{location}</h2>
      <h3>Github:{handle}</h3>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
};

export default User;
