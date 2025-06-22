import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

// 1. Create the context
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};


// 2. Create the provider component
const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  //  const contextValue = { all_product, cartItems };

  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((sum, qty) => sum + qty, 0);
  };




  const getTotalAmount = () => {
    return all_product.reduce((total, item) => {
      return total + (item.new_price * cartItems[item.id] || 0);
    }, 0);
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
    getTotalAmount
  };





  return (
    // 3. Provide the context value to all children components
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// 4. Export the provider to wrap your app
export default ShopContextProvider;
