import { Body } from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import "@testing-library/jest-dom";

import REST_LIST from "../mocks/restList.json";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(REST_LIST),
  });
});

describe("Intergation Testing", () => {
  beforeEach(() => {
    // console.log("Before each");
  });

  beforeAll(() => {
    // console.log("Before all");
  });

  afterEach(() => {
    // console.log("After Each");
  });

  afterAll(() => {
    // console.log("After All");
  });

  it("Should search rest list for burger text input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchButton = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchButton);

    const restCard = screen.getAllByTestId("restCard");

    // here I will check the number of card poupluate with "burger" text

    expect(restCard.length).toBe(2);
  });

  it("Should filter on Top rated restro click and reset it again when clicking on the reset button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const topRated = screen.getByRole("button", { name: "To rated restro" });

    fireEvent.click(topRated);

    const noOfRestroCard = screen.getAllByTestId("restCard");

    expect(noOfRestroCard.length).toBe(10);

    const resetButton = screen.getByRole("button", { name: "Reset" });

    fireEvent.click(resetButton);

    const noOfRestroCardAfterReset = screen.getAllByTestId("restCard");

    expect(noOfRestroCardAfterReset.length).toBe(20);
  });
});
