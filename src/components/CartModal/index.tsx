import * as React from "react";
import { Modal, ModalProps } from "../Modal";
import { Button } from "../Button";
import { useCart } from "../../hooks/useCart";
export const CartModal: React.FC<ModalProps> = props => {
  const { cart } = useCart();
  const cartIsEmpty = cart.length === 0;
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <h1>Carrito de compras</h1>
      {cartIsEmpty ? (
        <p>¡Aún no agregas nada al carrito!</p>
      ) : (
        <section>
          {cart.map(product => (
            <div>
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          ))}
          <Button url="/payments/checkout" text="Proceder a pago" />
        </section>
      )}
    </Modal>
  );
};
