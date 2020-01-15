import * as React from "react";

export function useModal() {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);
  const toggleModal = () => (isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true));
  return [isModalOpen, toggleModal];
}
