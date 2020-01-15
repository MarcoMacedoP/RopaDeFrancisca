import * as React from "react";
import { Button } from "../Button";
import { GlobalContext } from "../../pages/_app";
export type ProductProps = {
  name?: string;
  image?: string;
  price?: string;
  smallDesc?: string;
};
export const Product: React.FC<ProductProps> = ({
  smallDesc = "Lorem ipsum",
  image = "https://rebuild-catalog.rushordertees.com/modelImages/3600_00_fr.jpg",
  name = "Example",
  price = "10.99"
}) => {
  const { addProductToCart, cart } = React.useContext(GlobalContext);
  const handleAddProductToCart = () => {
    addProductToCart({ smallDesc, name, price, image });
    console.log(cart);
  };

  return (
    <>
      <section>
        <img src={image} alt={name} />
        <p>{smallDesc}</p>
        <p>{price}</p>
        <Button text="Agregar al carrito" onClick={handleAddProductToCart} />
      </section>
      <style jsx>
        {`
          section {
            max-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}
      </style>
    </>
  );
};
