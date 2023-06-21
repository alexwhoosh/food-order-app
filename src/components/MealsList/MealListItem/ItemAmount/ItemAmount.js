import Input from "../Input/Input";
import AmountContainer from "./ItemAmount.styled";

const ItemAmount = () => {
  return (
    <AmountContainer>
      <Input />
      <button>+ Add</button>
    </AmountContainer>
  );
};

export default ItemAmount;
