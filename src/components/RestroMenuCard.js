import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_ITEM_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import RestaurantCaegory from "./RestaurantCaegory";

export function RestroMenuCard() {
  const { id } = useParams();
  const [resInfo, setResInfo] = useState();
  const [showIndex, setShowIndex] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const details = await fetch(MENU_ITEM_URL + id);
    const json = await details.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;
  const { name, cuisines } = resInfo.cards[2].card.card.info;

  const menuItems =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      ?.itemCards;

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="font-bold text-2xl pt-1">{name}</h2>
      <h3 className="text-l pt-2">{cuisines.join(", ")}</h3>
      <div className="w-full">
        {categories.map((item, index) => (
          <RestaurantCaegory
            key={item.card.card.categoryId}
            details={item.card.card}
            showIndexBody={index === showIndex ? true : false}
            setShowIndex={() => {
              index === showIndex ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
