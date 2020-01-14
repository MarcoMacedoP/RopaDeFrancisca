import * as React from "react";
import { Button } from "../Button";
type ProductProps = {
  name?: string;
  image?: string;
  price?: string;
  smallDesc?: string;
};
export const Product: React.FC<ProductProps> = props => {
  const {
    smallDesc = "Lorem ipsum",
    image = "https://rebuild-catalog.rushordertees.com/modelImages/3600_00_fr.jpg",
    name = "Example",
    price = "10.99"
  } = props;
  return (
    <>
      <section>
        <img src={image} alt={name} />
        <p>{smallDesc}</p>
        <p>{price}</p>
        <Button text="Agregar al carrito" />
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
