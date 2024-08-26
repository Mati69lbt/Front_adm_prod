//cspell: ignore nuevoproducto

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {
  loader as productLoader,
  action as updateAvailabilityAction,
} from "./views/Products";
import Home from "./views/Home";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import Contact from "./views/Contact";
import EditProducts, {
  loader as EditProductLoader,
  action as EditProductAction,
} from "./views/EditProducts";
import { action as deleteProductAction } from "./components/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "productos",
        element: <Products />,
        loader: productLoader,
        action: updateAvailabilityAction,
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: "productos/:id/editar",
        element: <EditProducts />,
        loader: EditProductLoader,
        action: EditProductAction,
      },
      {
        path: "productos/:id/eliminar",
        action: deleteProductAction,
      },
      {
        path: "contacto",
        element: <Contact />,
      },
    ],
  },
]);
