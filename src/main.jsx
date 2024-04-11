import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProducts from "./pages/AllProducts.jsx";
import Home from "./pages/Home.jsx";
import ProductMainPage from "./pages/ProductMainPage.jsx";
import CkeckoutPage from "./pages/CkeckoutPage.jsx";
import AllServices from "./pages/AllServices.jsx";

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
                element: <AllServices/>,
            },
            {
                path: "/products/:id",
                element: <ProductMainPage />,
            },
            {
                path: "/checkout",
                element: <CkeckoutPage/>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
