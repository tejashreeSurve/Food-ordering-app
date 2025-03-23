import { render, screen } from "@testing-library/react";
import MOCKDATA from "../mocks/restroCard.json";
import { withPromotedLabel } from "../RestroCard";
import "@testing-library/jest-dom";

import { RestroCard } from "../RestroCard";

const RestaurantCardTest = () => {
  return <RestroCard restro={MOCKDATA} />;
};

it("Should render Heading", () => {
  render(<RestaurantCardTest />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

it("Should render the Open tag if the restaurant is Open", () => {
  const Restro = withPromotedLabel(RestroCard);
  render(<Restro restro={MOCKDATA} />);

  const openTag = screen.getByText("Open");

  expect(openTag).toBeInTheDocument();
});
