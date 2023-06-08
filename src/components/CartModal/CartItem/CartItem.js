import ItemContainer from "./CartItem.styled";
import AmountBadge from "./AmountBadge.styled";

const CartItem = ({ name, price, amount }) => {
  return (
    <ItemContainer>
      <div>
        <h2>{name}</h2>
        <span>{`$${price}`}</span>
        <AmountBadge>{amount}</AmountBadge>
      </div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </ItemContainer>
  );
};

export default CartItem;
