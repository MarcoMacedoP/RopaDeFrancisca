import * as React from "react";
import { Button } from "../Button";
import { Toast } from "../Toast";
import { useCart } from "../../hooks/useCart";

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
  const [isToastShowed, setToastShowed] = React.useState(false);
  const { addProductToCart, cart } = useCart();
  const handleAddProductToCart = () => {
    setToastShowed(true);
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
