import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { BrowserRouter } from "react-router";
import { RestroMenuCard } from "../RestroMenuCard";
import MOCK_MENU_LIST from "../mocks/restroMenuList.json";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { Header } from "../Header";
import "@testing-library/jest-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_MENU_LIST),
  });
});

describe("Cart items", () => {
  // it("Should add item in cart", async () => {
  //   await act(async () =>
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <Header />
  //           <RestroMenuCard />
  //         </Provider>
  //       </BrowserRouter>
  //     )
  //   );

  //   const menuListItem = screen.getAllByTestId("menu-list");

  //   expect(menuListItem.length).toBe(5);

  //   const cardText = screen.getByText("Pot Rice (3)");

  //   fireEvent.click(cardText);

  //   const butttonList = screen.getAllByRole("button", { name: "+ Add" });

  //   console.log("butoto", butttonList.length);
  //   fireEvent.click(butttonList[0]);

  //   const cart = screen.getByText("Cart (1)");

  //   expect(cart).toBeInTheDocument();
  // });

  it("Should add item in cart", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestroMenuCard />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const menuListItem = screen.getAllByTestId("menu-list");

    expect(menuListItem.length).toBe(5);

    const cardText = screen.getByText("Recommended (20)");

    fireEvent.click(cardText);

    const butttonList = screen.getAllByRole("button", { name: "+ Add" });

    expect(butttonList.length).toBe(20);
    fireEvent.click(butttonList[0]);
    fireEvent.click(butttonList[1]);
    fireEvent.click(butttonList[2]);
    fireEvent.click(butttonList[3]);
    fireEvent.click(butttonList[4]);

    const menuListAfter = screen.getAllByTestId("item-menu"); // nhi samjha

    expect(menuListAfter.length).toBe(25);
  });
});
