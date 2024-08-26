// cspell: ignore Draf, valibot
import { safeParse } from "valibot";
import {
  DrafProductSchema,
  Product,
  ProductSchema,
  ProductsSchema,
} from "../types";
import axios from "axios";

type ProductData = {
  [k: string]: FormDataEntryValue;
};

function toBoolean(str: string) {
  return str.toLowerCase() === "true";
}

export const addProduct = async (data: ProductData) => {
  try {
    const result = safeParse(DrafProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/productos`;
      await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
    } else {
      throw new Error("Datos no Válidos");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
  }
};

export async function getProducts() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/productos`;
    const { data } = await axios(url);
    const productsWithDefaults = data.data.map((item: Product) => ({
      ...item,
      availability: item.availability !== undefined ? item.availability : true,
    }));
    const result = safeParse(ProductsSchema, productsWithDefaults);
    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error...");
    }
  } catch (error) {
    console.error(error);
    console.log(error);
  }
}

export async function getProductById(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`;
    const { data } = await axios(url);

    const result = safeParse(ProductSchema, data.product);

    if (result.success) {
      return result.output;
    } else {
      throw new Error("Hubo un error...");
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduct(data: ProductData, id: Product["id"]) {
  try {
    const result = safeParse(ProductSchema, {
      id,
      name: data.name,
      price: +data.price,
      availability: toBoolean(data.availability.toString()),
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`;
      const { data } = await axios.put(url, result.output);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`;
    await axios.delete(url);
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductAvailability(id: Product["id"]) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/productos/${id}`;
    await axios.patch(url);
  } catch (error) {
    console.log(error);
  }
}
