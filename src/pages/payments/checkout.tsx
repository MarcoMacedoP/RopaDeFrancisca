import * as React from "react";
import { Button } from "../../components/Button";
import { useCart } from "../../hooks/useCart";

const Checkout = props => {
  const { cart } = useCart();

  return (
    <>
      <article>
        <h1>Checkout</h1>
        {cart.map(product => (
          <div className="">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
        <Button text="Pagar" />
      </article>
    </>
  );
};

export default Checkout;
