import React from "react";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : []; // if we call direct the product array we get is empty, and every page refresh it gets empty, so we need array of cartItem that why we localstorage method with conditionl rendering. Now the array we get exact like we save in local storage with products
  });

  const [wishListItems, setWishListItems] = useState(() => {
    const savedWishlist = localStorage.getItem("wishListItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // receive product object asa a parameter
  const addToCart = (product) => {
    // first we find the product for it is already in cart or not
    const existingItem = cartItems.find((item) => item.id === product.id);

    // javascript considere object as truthsy therefore we used it in if blocks, if existingItem is found the if declare it true thats the if blocks run because the condn is satisfied
    if (existingItem) {
      const updateCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );

      setCartItems(updateCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem.quantity > 1) {
      const updateCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      );
      setCartItems(updateCart);
    } else {
      let filterCart = cartItems.filter((item) => item.id !== product.id);
      setCartItems(filterCart);
    }
  };

  const deleteFromCart = (product) => {
    let filterCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filterCart);
  };

  const totalCartValue = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // console.log(cartCount);

  const addToWishList = (product) => {
    const existingItem = wishListItems.find((item) => item.id === product.id);

    if (existingItem) {
      // don't need to perform anything
      alert("Product already add in wishlist🤗, add another products.");
      deleteFromCart(product);
    } else {
      setWishListItems([...wishListItems, product]);
      deleteFromCart(product);
    }
  };

  const deleteFromWishList = (product) => {
    let filterWishList = wishListItems.filter((item) => item.id !== product.id);
    setWishListItems(filterWishList);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); // whenever we add product in cart then the localstorage add cart array to system, if we not use use useEffect the the cart array save evertime on rerendering

  useEffect(() => {
    localStorage.setItem("wishListItems", JSON.stringify(wishListItems));
  }, [wishListItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        totalCartValue,
        cartCount,
        wishListItems,
        addToWishList,
        deleteFromWishList,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
