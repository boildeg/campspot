import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
export default function AddCabin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
        Add new cabin
      </Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm onCloseModal={setIsOpen} />
        </Modal>
      )}
    </>
  );
}
