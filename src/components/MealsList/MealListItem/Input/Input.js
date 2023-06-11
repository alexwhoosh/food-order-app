import Container from "./Input.styled";

const Input = ({ onChange, amountRef }) => {
  return (
    <Container>
      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount" id="amount" ref={amountRef} min={0} />
    </Container>
  );
};

export default Input;
