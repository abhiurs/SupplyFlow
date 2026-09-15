import { createContext, useContext, useState } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {

  const [products, setProducts] = useState([

    {
      id: 1,
      name: "Dell Laptop",
      category: "Electronics",
      stock: 45,
      price: 65000,
      reorderLevel: 10,
      supplier: "TechSource Ltd",
      warehouse: "Bangalore WH",
    },

    {
      id: 2,
      name: "Office Chair",
      category: "Furniture",
      stock: 12,
      price: 8500,
      reorderLevel: 15,
      supplier: "Prime Supplies",
      warehouse: "Mumbai WH",
    },

    {
      id: 3,
      name: "Keyboard",
      category: "Accessories",
      stock: 85,
      price: 1200,
      reorderLevel: 20,
      supplier: "SupplyHub",
      warehouse: "Delhi WH",
    },

  ]);

  return (

    <InventoryContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </InventoryContext.Provider>

  );

};

export const useInventory = () => {
  return useContext(InventoryContext);
};