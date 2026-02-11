import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } =
    useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && (
        <p>No items in cart</p>
      )}

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            marginBottom: "10px",
            padding: "10px",
          }}
        >
          <img
            src={
              item.image_front_thumb_url
            }
            width="80"
            alt=""
          />

          <h4>
            {item.product_name}
          </h4>

          <button
            onClick={() =>
              removeFromCart(
                item.code
              )
            }
          >
            Remove ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
