import {
  ActionFunctionArgs,
  Form,
  redirect,
  useFetcher,
  useNavigate,
} from "react-router-dom";
import { Product } from "../types";
import { deleteProduct } from "../services/ProductService";

type ProductDetailsProps = {
  product: Product;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export async function action({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    await deleteProduct(+params.id);
    return redirect("/productos");
  }
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const navigate = useNavigate();
  const disponible = product.availability;
  const fetcher = useFetcher();

  return (
    <>
      <tr className="border-b ">
        <td className="p-3 text-xs text-gray-800 sm:text-lg">{product.name}</td>
        <td className="p-3 text-xs text-gray-800 sm:text-lg ">
          {formatCurrency(product.price)}
        </td>
        <td className="p-3 text-xs text-gray-800 sm:text-lg">
          <fetcher.Form method="POST">
            <button
              type="submit"
              name="id"
              value={product.id}
              className={`${
                disponible ? "text-black" : "text-red-600"
              } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}
            >
              {disponible ? "Disponible" : "No disponible"}
            </button>
          </fetcher.Form>
        </td>
        <td className="p-3 text-xs text-gray-800 sm:text-lg ">
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <button
              onClick={() => navigate(`/productos/${product.id}/editar`)}
              className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
            >
              Editar
            </button>
            <Form
              className="w-full"
              method="POST"
              action={`/productos/${product.id}/eliminar`}
              onSubmit={(e) => {
                if (!confirm(`¿Desea Eliminar el producto: ${product.name}?`)) {
                  e.preventDefault();
                }
              }}
            >
              <input
                type="submit"
                value="eliminar"
                className="bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center"
              />
            </Form>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductDetails;
