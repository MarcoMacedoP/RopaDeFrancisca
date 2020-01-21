import * as React from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const toggleModal = () => (isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true));
  return [isModalOpen, toggleModal];
}

/**
 * This hook is responsble for the mounting of the Modal
 */
export function useMountModal(isOpen) {
  const domReference = React.useRef();
  const [isMounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    domReference.current = document.querySelector("#modal");
  });

  React.useEffect(() => {
    setMounted(isOpen);
  }, [isOpen]);

  return {
    isMounted,
    domReference
  };
}
