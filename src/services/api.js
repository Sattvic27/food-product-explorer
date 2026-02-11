import axios from "axios";

// Base URL
const BASE_URL =
  "https://world.openfoodfacts.org";


// 1️⃣ Fetch products by category (with pagination)
export const fetchProductsByCategory =
  async (
    category = "snacks",
    page = 1
  ) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/category/${category}.json?page=${page}&page_size=20`
      );

      return res.data.products;
    } catch (error) {
      console.log(
        "Error fetching category products",
        error
      );
      return [];
    }
  };


// 2️⃣ Search products by name
export const searchProducts = async (
  name
) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/cgi/search.pl?search_terms=${name}&json=true&page_size=20`
    );

    return res.data.products;
  } catch (error) {
    console.log("Search error", error);
    return [];
  }
};


// 3️⃣ Fetch product details by barcode
export const fetchProductByBarcode =
  async (barcode) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/v0/product/${barcode}.json`
      );

      return res.data.product;
    } catch (error) {
      console.log(
        "Error fetching product detail",
        error
      );
      return null;
    }
  };


// 4️⃣ Fetch products by multiple categories (optional advanced)
export const fetchMultipleCategories =
  async (categories = []) => {
    try {
      const promises = categories.map(
        (cat) =>
          axios.get(
            `${BASE_URL}/category/${cat}.json?page_size=10`
          )
      );

      const results =
        await Promise.all(promises);

      return results.flatMap(
        (res) => res.data.products
      );
    } catch (error) {
      console.log(
        "Multi-category error",
        error
      );
      return [];
    }
  };
