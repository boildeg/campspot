import { useState, useRef } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={(e) => {
          e.stopPropagation(); // Stop event from reaching document
          setIsOpen(true); // Just set to true, no need to toggle
        }}
      >
        Add new cabin
      </Button>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}
