import { forwardRef } from "react";
import Container from "./Input.styled";

const Input = forwardRef(({ onChange, value }, ref) => {
  return (
    <Container>
      <label htmlFor="amount">Amount</label>
      <input
        type="number"
        name="amount"
        id="amount"
        onChange={onChange}
        value={value}
        ref={ref}
        min={0}
      />
    </Container>
  );
});

export default Input;
