import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  fetchProductsByCategory,
  searchProducts,
} from "../services/api";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";

function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("snacks");

  useEffect(() => {
  loadProducts();
}, [loadProducts]);

  const loadProducts = async (
    pageNum,
    reset = false
  ) => {
    const data =
      await fetchProductsByCategory(
        category,
        pageNum
      );

    if (reset) {
      setProducts(data);
    } else {
      setProducts((prev) => [
        ...prev,
        ...data,
      ]);
    }
  };

  const fetchMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadProducts(nextPage);
  };

  // SEARCH
  const handleSearch = async (value) => {
    if (!value) {
      loadProducts(1, true);
      return;
    }

    if (/^\d+$/.test(value)) {
      window.location.href = `/product/${value}`;
      return;
    }

    const data = await searchProducts(value);
    setProducts(data);
  };

  // SORT
  const handleSort = (type) => {
    let sorted = [...products];

    if (type === "az") {
      sorted.sort((a, b) =>
        (a.product_name || "").localeCompare(
          b.product_name || ""
        )
      );
    }

    if (type === "za") {
      sorted.sort((a, b) =>
        (b.product_name || "").localeCompare(
          a.product_name || ""
        )
      );
    }

    if (type === "grade") {
      sorted.sort((a, b) =>
        (a.nutrition_grades || "").localeCompare(
          b.nutrition_grades || ""
        )
      );
    }

    setProducts(sorted);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      {/* Controls */}
      <div style={{ marginBottom: "20px" }}>
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter
          onChange={setCategory}
        />
        <SortDropdown
          onSort={handleSort}
        />
      </div>

      {/* Infinite Scroll */}
      <InfiniteScroll
        dataLength={products.length}
        next={fetchMore}
        hasMore={true}
        loader={<h3>Loading...</h3>}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((item, index) => (
            <ProductCard
              key={index}
              item={item}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Home;
