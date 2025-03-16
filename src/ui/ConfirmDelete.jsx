import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import SpinnerMini from "./SpinnerMini";
const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resource, onConfirm, disabled, onCloseModal }) {
  function handleConfirmClick() {
    onConfirm?.(onCloseModal);
    // Don't close the modal immediately, let it close naturally after the operation completes
    // or let the parent component handle closing it
    // onCloseModal?.();
  }
  function handleCloseModal() {
    onCloseModal?.();
  }

  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button
          variation="danger"
          onClick={handleConfirmClick}
          disabled={disabled}
          className="display: flex; align-items: center; gap: 0.4rem;"
        >
          {disabled ? (
            <>
              <SpinnerMini />
              Deleting
            </>
          ) : (
            "Delete"
          )}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
