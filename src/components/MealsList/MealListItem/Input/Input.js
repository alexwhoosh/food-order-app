import Container from "./Input.styled";

const Input = () => {
  return (
    <Container>
      <label for="amount">Amount</label>
      <input type="number" name="amount" id="amount" />
    </Container>
  );
};

export default Input;
