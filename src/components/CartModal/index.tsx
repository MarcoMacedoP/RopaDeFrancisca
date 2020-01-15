import * as React from "react";
import { Modal, ModalProps } from "../Modal";
import { GlobalContext } from "../../pages/_app";
export const CartModal: React.FC<ModalProps> = props => {
  const { cart } = React.useContext(GlobalContext);
  const cartIsEmpty = cart.length === 0;
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <h1>Carrito de compras</h1>
      {cartIsEmpty ? (
        <p>¡Aún no agregas nada al carrito!</p>
      ) : (
        cart.map(product => (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))
      )}
    </Modal>
  );
};
