import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

// 1. Create the context
export const ShopContext = createContext(null);

// 2. Create the provider component
const ShopContextProvider = (props) => {
  // The value to share with all components using this context
   const contextValue = { all_product }; // ✅

  return (
    // 3. Provide the context value to all children components
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

// 4. Export the provider to wrap your app
export default ShopContextProvider;
