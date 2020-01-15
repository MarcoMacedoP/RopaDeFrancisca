import { Layout } from "../components/Layout";
import * as React from "react";
import { ProductProps } from "../components/Product";

export interface GlobalContextInterface {
  cart: Array<ProductProps>;
  products: ProductProps[];
  addProductToCart: Function;
}
const initialState: GlobalContextInterface = {
  products: [],
  cart: [],
  addProductToCart: (product: ProductProps) => {
    initialState.cart.push(product);
  }
};
export const GlobalContext = React.createContext(initialState);

function App({ Component, pageProps }) {
  return (
    <GlobalContext.Provider value={initialState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}
export default App;
