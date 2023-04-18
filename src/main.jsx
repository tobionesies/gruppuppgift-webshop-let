import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout'
import ManageProducts from './pages/admin/ManageProducts';
// import ErrorPage from './pages/ErrorPage';
import UpdateProduct from './pages/admin/UpdateProduct';
import CreateProduct from './pages/admin/CreateProduct';

const addToCart = (product) => {
  console.log(product)
  // setCartContent([
  //   ...cartContent,
  //   product
  // ])
  //   console.log(cartContent)
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: ,
    children: [
      {
        path: "/",
        element: <Products addToCart={addToCart}/>,
      },
      {
        path: "/:id",
        element: <Product />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/create-product",
        element: <CreateProduct />,
      },
      {
        path: "/update-product/:id",
        element: <UpdateProduct />,
      },
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
