import {
  createContext,
  useState,
  useEffect,
} from "react";

export const WishlistContext =
  createContext();

function WishlistProvider({
  children,
}) {
  const [wishlistItems,
    setWishlistItems] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "wishlist"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "wishlist",
      JSON.stringify(
        wishlistItems
      )
    );
  }, [wishlistItems]);

  const addToWishlist = (
    product
  ) => {
    setWishlistItems((prev) => [
      ...prev,
      product,
    ]);
  };

  const removeFromWishlist =
    (index) => {
      setWishlistItems(
        (current) =>
          current.filter(
            (_, i) =>
              i !== index
          )
      );
    };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;