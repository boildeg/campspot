import Button from "../../ui/Button";
import Modal from "../../ui/Modal-v2";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        {({ onClick }) => <Button onClick={onClick}>Add new cabin</Button>}
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}
export default AddCabin;

// export default function AddCabin() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <Button
//         onClick={(e) => {
//           e.stopPropagation(); // Stop event from reaching document
//           setIsOpen(true); // Just set to true, no need to toggle
//         }}
//       >
//         Add new cabin
//       </Button>
//       {isOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }
