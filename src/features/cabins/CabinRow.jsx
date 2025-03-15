import styled from "styled-components";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";

import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";
import EditCabinForm from "./EditCabinForm";
import { useDeleteCabin } from "./useDeleteCabin";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  padding-left: 0.5rem;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Inter", sans-serif;
`;

const Price = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: var(--color-green-700);
`;

const TableRowActions = styled.div`
  display: flex;
  gap: 0.4rem;
`;

function CabinRow({ cabin }) {
  const [isEditing, setIsEditing] = useState(false);

  const { isDeleting, deleteMutate } = useDeleteCabin();

  return (
    <>
      <Table.Row>
        <Img src={cabin.image} />
        <Cabin>{cabin.name}</Cabin>
        <div>Fits up to {cabin.maxCapacity} guests</div>
        <Price>{formatCurrency(cabin.regularPrice)}</Price>
        <Discount>
          {cabin.discount ? (
            formatCurrency(cabin.discount)
          ) : (
            <span>&mdash;</span>
          )}
        </Discount>
        <TableRowActions>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(!isEditing);
            }}
            variant="primary"
            size="small"
          >
            {isEditing ? "Cancel" : "Edit"}
          </Button>
          <Button
            onClick={() => deleteMutate(cabin.id)}
            className="display: flex; align-items: center; gap: 0.4rem;"
          >
            {isDeleting ? (
              <>
                <SpinnerMini />
                Deleting
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </TableRowActions>
      </Table.Row>
      {isEditing && (
        <Modal onClose={() => setIsEditing(false)}>
          <EditCabinForm cabin={cabin} setIsEditing={setIsEditing} />
        </Modal>
      )}
    </>
  );
}
export default CabinRow;
