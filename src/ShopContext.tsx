import { createContext, useContext, useState } from "react";
import PRODUCTS from "./data/all_products.json";

export interface ProductSearchProps {
  count: number;
  id: number;
}

export interface CartManager {
  addItems(newItem: ProductSearchProps): void;
  removeItems(newItem: ProductSearchProps): void;
  getItemsCount(): number;
  retreiveItemCount(id: number): number;
}

const getDefaultCart = () => {
  let cart: ProductSearchProps[] = [];
  for (let i = 0; i < PRODUCTS.length; i++) {
    cart.push({ count: 0, id: PRODUCTS[i].id } as ProductSearchProps);
  }
  return cart;
};

const ShopCartContext = createContext<CartManager | undefined>(undefined);

export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState<ProductSearchProps[]>(
    getDefaultCart()
  );

  const addItems = (newItem: ProductSearchProps) => {
    let currentItems = [...cartItems];
    let idx = currentItems.findIndex((item) => item.id === newItem.id);
    currentItems.filter((item) => item.count > 0);
    if (idx == -1) return;

    currentItems[idx].count += 1;
    setCartItems(currentItems);
    console.log(cartItems);
  };

  const removeItems = (newItem: ProductSearchProps) => {
    let currentItems = [...cartItems];
    let idx = currentItems.findIndex((item) => item.id === newItem.id);
    currentItems.filter((item) => item.count > 0);
    if (idx == -1) return;
    currentItems[idx].count -= 1;
    currentItems.filter((item) => item.count > 0);
    setCartItems(currentItems);
    console.log(cartItems);
  };

  const getItemsCount = () => {
    let count = 0;
    cartItems.forEach((item) => (count += item.count));
    return count;
  };

  const retreiveItemCount = (id: number) => {
    let idx = cartItems.find((item) => item.id === id);
    if (idx) {
      return idx.count;
    } else {
      return -1;
    }
  };

  const contextValue = {
    addItems,
    removeItems,
    getItemsCount,
    retreiveItemCount,
  } as CartManager;

  return (
    <ShopCartContext.Provider value={contextValue}>
      {props.children}
    </ShopCartContext.Provider>
  );
};

export const useShopCart = () => {
  const context = useContext(ShopCartContext);
  if (context === undefined) {
    throw new Error("useShopCart must be used within a ShopContextProvider");
  }
  return context;
};
