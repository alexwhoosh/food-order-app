import { forwardRef, useState, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../../../../UI/Button.styled";

const ItemAmount = forwardRef(({ onClick, totalAmount, id }, ref) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (totalAmount === 0) {
      setValue(0);
    }
  }, [totalAmount]);

  return (
    <>
      <Input
        ref={ref}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={onClick}>+ Add</Button>
    </>
  );
});

export default ItemAmount;
