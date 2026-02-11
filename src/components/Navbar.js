import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [dark, setDark] =
    useState(false);

  const toggleDark = () => {
    setDark(!dark);

    document.body.style.background =
      dark ? "white" : "#111";

    document.body.style.color =
      dark ? "black" : "white";
  };

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent:
          "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2>🍔 Food Explorer</h2>
      </Link>

      <div>
        <button
          onClick={toggleDark}
          style={{
            marginRight: "10px",
          }}
        >
          🌙
        </button>

        <Link
          to="/cart"
          style={{ color: "white" }}
        >
          🛒 Cart
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
