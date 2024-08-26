import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom";
import {
  getProducts,
  updateProductAvailability,
} from "../services/ProductService";
// import ProductDetails from "../components/ProductDetails";
import { Product } from "../types";
import ProductDetails from "../components/ProductDetails";

export async function loader() {
  const products = await getProducts();
  return products;
}

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());
  await updateProductAvailability(+data.id);
  return null;
}

const Products = () => {
  const products = useLoaderData() as Product[];

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to={"nuevo"}
          className="mt-4 sm:mt-0 rounded-md bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500"
        >
          Agregar Producto
        </Link>
      </div>
      <div className="p-2 overflow-x-auto">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
            <tr>
              <th className="p-2 text-left">Producto</th>
              <th className="p-2 text-left">Precio</th>
              <th className="p-2 text-left">Disponibilidad</th>
              <th className="p-2 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductDetails key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
