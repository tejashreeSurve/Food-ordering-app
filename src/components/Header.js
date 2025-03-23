import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/context";
import { useSelector } from "react-redux";

export const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [login, setLogin] = useState(false);

  const { loggedInUser } = useContext(UserContext);

  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="flex bg-gray-300 items-center shadow-l justify-between m-3">
      <div className="w-25 h-25 m-3">
        <img src="https://img.freepik.com/premium-vector/beautiful-unique-food-restaurant-company-logo-design_981150-2156.jpg" />
      </div>
      <div className="flex">
        <ul className="flex m-3">
          <li className="p-3 text-l font-medium">
            <h3>Online Status: {onlineStatus ? "🟢" : "🔴"}</h3>
          </li>
          <li className="p-3 text-l font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 text-l font-medium">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3 text-l font-medium">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="p-3 text-l font-medium">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 text-l font-bold">
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li className="p-3 text-l font-medium cursor-pointer">
            <button type="button" onClick={() => setLogin(!login)}>
              {login ? "Logout" : "Login"}
            </button>
          </li>
          <li className="p-3 text-l font-medium">
            User: <span className="font-bold">{loggedInUser}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
