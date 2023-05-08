import Input from "../Input/Input";
import AmountContainer from "./ItemAmount.styled";

const ItemAmount = ({ onClick, amountRef }) => {
  return (
    <AmountContainer>
      <Input amountRef={amountRef} />
      <button onClick={onClick}>+ Add</button>
    </AmountContainer>
  );
};

export default ItemAmount;
