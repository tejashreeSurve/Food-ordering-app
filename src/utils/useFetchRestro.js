import { useState, useEffect } from "react";

export function useFetchRestro() {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filterRestro, setFilterRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0125259&lng=72.8626251&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();
    setListOfRestro(
      list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestro(
      list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return { listOfRestro, filterRestro, setFilterRestro };
}
