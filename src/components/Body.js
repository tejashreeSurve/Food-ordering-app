import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { RestroCard, withPromotedLabel } from "./RestroCard";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { useFetchRestro } from "../utils/useFetchRestro";
import Shimmer from "./Shimmer";
import { UserContext } from "../utils/context";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const { listOfRestro, filterRestro, setFilterRestro } = useFetchRestro();
  const { loggedInUser, setUsername } = useContext(UserContext);

  useEffect(() => {
    if (searchText === "") {
      setFilterRestro(listOfRestro);
    }
  }, [searchText]);

  const onFilterHit = () => {
    const filterBySearch = listOfRestro.filter((restro) =>
      restro.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestro(filterBySearch);
  };

  const RestroCardWithLabel = withPromotedLabel(RestroCard);

  if (!onlineStatus) {
    return <h1>Please check your internet connection!</h1>;
  }

  return (
    <div className="m-3">
      <div className="py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <input
            data-testid="searchInput"
            className="w-60 border-1 rounded h-10 border-gray-400 p-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onFilterHit();
              }
            }}
          />
          <button
            type="button"
            onClick={onFilterHit}
            className="bg-gray-400 border-1 text-white p-2 rounded"
          >
            Search
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            const filteredList = listOfRestro.filter(
              (r) => r.info.avgRating >= 4.5
            );
            setFilterRestro(filteredList);
          }}
          className="bg-gray-600 border-1 text-white p-2 rounded"
        >
          To rated restro
        </button>
        <button
          type="button"
          onClick={() => {
            setFilterRestro(listOfRestro);
          }}
          className="bg-gray-400 border-1 text-white p-1 rounded text-xs"
        >
          Reset
        </button>
        {/* <div className="flex gap-2">
          <label>Username</label>
          <input
            value={loggedInUser}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-black p-3"
          />
        </div> */}
      </div>
      {filterRestro.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap align-middle">
          {filterRestro.map((item) => (
            <Link
              to={`restaurants/${item.info.id}`}
              key={item.info.id}
              className="m-3"
            >
              {item.info.isOpen ? (
                <RestroCardWithLabel restro={item} />
              ) : (
                <RestroCard restro={item} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
