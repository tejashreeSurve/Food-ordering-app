import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Error } from "./src/components/Error";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { About } from "./src/components/About";
import { Contact } from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { RestroMenuCard } from "./src/components/RestroMenuCard";
import { UserContext } from "./src/utils/context";
import { Provider } from "react-redux";
import { appStore } from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [username, setUsername] = useState("default");

  useEffect(() => {
    setUsername("Tanvi");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
        <div id="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body />, errorElement: <Error /> },
      { path: "/about", element: <About />, errorElement: <Error /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:id", element: <RestroMenuCard /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
