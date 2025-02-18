import { useState } from "react";
import Heading from "@/ui/Heading";
import Row from "@/ui/Row";
import CabinTable from "@/features/cabins/CabinTable";
import CreateCabinForm from "@/features/cabins/CreateCabinForm";
import Button from "@/ui/Button";

function Cabins() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
      </Row>
      <Row>
        <CabinTable />
        <Button onClick={() => setIsOpen((isOpen) => !isOpen)}>
          Add new cabin
        </Button>
        {isOpen && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
