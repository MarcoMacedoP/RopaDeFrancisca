import * as React from "react";
import { GlobalContext } from "../pages/_app";

export function useCart() {
  const { cart, addProductToCart } = React.useContext(GlobalContext);
  const onAddProduct = product => {
    addProductToCart(product);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return { cart, addProductToCart: onAddProduct };
}
