import * as React from "react";

type ModalProps = {
  onClose: Function;
  status: "open" | "close";
};
const Modal: React.FC<ModalProps> = props => {
  return props.status === "open" && <div className="modal"></div>;
};
