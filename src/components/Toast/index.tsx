import * as React from "react";
import { createPortal } from "react-dom";
import { useMountModal } from "../../hooks/modals";
import { Icon } from "../Icon";

export type ToastProps = {
  isOpen: boolean;
  message: string;
  onClose: () => void;
};
export const Toast: React.FC<ToastProps> = props => {
  const { domReference, isMounted } = useMountModal(props.isOpen);
  return isMounted
    ? createPortal(
        <>
          <div className="toast">
            <p>{props.message}</p>
            <div className="icon-container">
              <Icon value="close" />
            </div>
          </div>
          <style jsx>{`
            .toast {
              position: absolute;
              left: 1rem;
              bottom: 1rem;
              display: flex;
              justify-content: space-around;
              background-color: orangered;
              width: 200px;
              heigth: 100px;
              padding: 1rem;
              box-sizing: border-box;
            }
            .icon-container {
              position: absolute;
              right: 0.5rem;
            }
          `}</style>
        </>,
        domReference.current
      )
    : null;
};
