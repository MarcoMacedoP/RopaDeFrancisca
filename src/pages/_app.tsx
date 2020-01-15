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
  addProductToCart: (product: ProductProps) => {}
};
export const GlobalContext = React.createContext(initialState);

function App({ Component, pageProps }) {
  const [globalState, setGlobalState] = React.useState(initialState);

  React.useEffect(() => {
    setGlobalState({
      ...globalState,
      cart: JSON.parse(localStorage.getItem("cart")) || []
    });
  }, []);
  globalState.addProductToCart = product => {
    setGlobalState({ ...globalState, cart: [...globalState.cart, product] });
  };

  return (
    <GlobalContext.Provider value={globalState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}
export default App;
