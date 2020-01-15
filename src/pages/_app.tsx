import { Layout } from "../components/Layout";
import * as React from "react";
import { ProductProps } from "../components/Product";

export interface GlobalContextInterface {
  cart: Array<ProductProps>;
}
const initialState: GlobalContextInterface = {
  cart: []
};
export const GlobalContext = React.createContext(initialState);

function App({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalContext.Provider value={initialState}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </Layout>
  );
}
export default App;
