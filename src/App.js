import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "../src/Layouts/Layouts";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import Orders from "./Components/Orders/Orders";
import Inventory from "./Components/Inventory/Inventory";
import { productsAndCartLoader } from "./Loaders/productsAndCartLoader";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Shipping from "./Components/Shipping/Shipping";
import PrivateRoues from "./Components/Routes/PrivateRoues";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => {
            return fetch("products.json");
          },
          element: <Shop></Shop>,
        },

        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: (
            <PrivateRoues>
              <Inventory></Inventory>
            </PrivateRoues>
          ),
        },
        {
          path: "/shipping",
          element: (
            <PrivateRoues>
              <Shipping></Shipping>
            </PrivateRoues>
          ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
