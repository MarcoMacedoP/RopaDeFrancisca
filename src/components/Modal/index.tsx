import * as React from "react";
import { createPortal } from "react-dom";
import { Icon } from "../Icon";

export type ModalProps = {
  onClose: boolean | (() => void);
  isOpen: boolean | (() => void);
};
export const Modal: React.FC<ModalProps> = props => {
  const ref = React.useRef();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    ref.current = document.querySelector("#modal");
  });

  React.useEffect(() => {
    setMounted(typeof props.isOpen === "boolean" && props.isOpen);
    console.log(mounted);
  }, [props.isOpen]);

  return mounted
    ? createPortal(
        <ModalComponent onClose={props.onClose}>{props.children}</ModalComponent>,
        ref.current
      )
    : null;
};

const ModalComponent = ({ children, onClose }) => (
  <>
    <div className="modal-background" onClick={onClose} />
    <div className="modal-container">
      <div className="modal">
        <div className="icon-container">
          <Icon value="close" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
    <style jsx>{`
      .modal-background {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.2);
      }
      .modal-container {
        position: fixed;
        top: 0;
        z-index: 99999;
        width: 100vw;
        height: 92vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .modal {
        position: relative;
        border-radius: 0.5rem;
        padding: 1rem;
        min-width: 60vw;
        width: min-content;
        min-height: 40vh;
        height: min-content;
        background: whitesmoke;
      }
      .icon-container {
        cursor: pointer;
        position: absolute;
        top: 0.5rem;
        right: 1rem;
      }
    `}</style>
  </>
);
