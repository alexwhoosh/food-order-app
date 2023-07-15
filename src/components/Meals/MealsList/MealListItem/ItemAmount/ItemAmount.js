import { forwardRef, useState, useEffect } from "react";
import Input from "../Input/Input";
import Button from "../../../../UI/Button.styled";

const ItemAmount = forwardRef(function ItemAmount(
  { onClick, totalAmount },
  ref
) {
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
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button onClick={onClick}>+ Add</Button>
    </>
  );
});

export default ItemAmount;
