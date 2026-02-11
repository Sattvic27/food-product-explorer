import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ item }) {
  const { addToCart } =
    useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <Link
        to={`/product/${item.code}`}
        style={{
          textDecoration: "none",
          color: "black",
        }}
      >
        <img
          src={
            item.image_front_thumb_url
          }
          width="100%"
          height="150"
          alt=""
        />

        <h4>
          {item.product_name ||
            "No Name"}
        </h4>

        <p>
          Nutrition:{" "}
          {item.nutrition_grades}
        </p>
      </Link>

      {/* Add to Cart */}
      <button
        onClick={() =>
          addToCart(item)
        }
        style={{
          marginTop: "10px",
          padding: "5px 10px",
        }}
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;
