import Container from "./Input.styled";

const Input = ({ onChange, amountRef }) => {
  return (
    <Container>
      <label htmlFor="amount">Amount</label>
      <input type="number" name="amount" id="amount" ref={amountRef} />
    </Container>
  );
};

export default Input;
