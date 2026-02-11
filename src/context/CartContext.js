import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({
  children,
}) => {
  const [cart, setCart] = useState([]);

  // Add item
  const addToCart = (product) => {
    setCart((prev) => [
      ...prev,
      product,
    ]);
  };

  // Remove item
  const removeFromCart = (code) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.code !== code
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
