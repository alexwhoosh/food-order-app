import { forwardRef } from "react";
import Container from "./Input.styled";

const Input = forwardRef(({ onChange, value, id }, ref) => {
  return (
    <Container>
      <label htmlFor={`amount_${id}`}>Amount</label>
      <input
        type="number"
        name="amount"
        id={`amount_${id}`}
        onChange={onChange}
        value={value}
        ref={ref}
        min={0}
      />
    </Container>
  );
});

export default Input;
