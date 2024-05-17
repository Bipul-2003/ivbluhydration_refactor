import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts.jsx";
import Home from "./pages/Home.jsx";
import ProductMainPage from "./pages/ProductMainPage.jsx";
import { Analytics } from "@vercel/analytics/react";
import CkeckoutPage from "./pages/CkeckoutPage.jsx";
import AllServices from "./pages/AllServices.jsx";
import MembershipPage from "./pages/MembershipPage.jsx";
import AllTreatmentsPage from "./pages/AllTreatmentsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-produts",
        element: <AllProducts />,
      },
      {
        path: "/all-services",
        element: <AllServices />,
      },
      {
        path: "/all-treatments",
        element: <AllTreatmentsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductMainPage />,
      },
      {
        path: "/checkout",
        element: <CkeckoutPage />,
      },
      {
        path: "/memberships",
        element: <MembershipPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Analytics />
  </React.StrictMode>
);
