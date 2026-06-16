import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext =
  createContext();

function CartProvider({
  children,
}) {
  const [cartItems,
    setCartItems] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "cart"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        cartItems
      )
    );
  }, [cartItems]);

  const addToCart = (
    product
  ) => {
    setCartItems((prev) => {
      const existing =
        prev.find(
          (item) =>
            item._id ===
            product._id
        );

      if (existing) {
        return prev.map(
          (item) =>
            item._id ===
            product._id
              ? {
                  ...item,
                  quantity:
                    (item.quantity ||
                      1) + 1,
                }
              : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
const increaseQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity:
              (item.quantity || 1) + 1,
          }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity: Math.max(
              1,
              (item.quantity || 1) - 1
            ),
          }
        : item
    )
  );
};

  return (
 <CartContext.Provider
  value={{
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  }}
>
  {children}
</CartContext.Provider>
  );
}

export default CartProvider;