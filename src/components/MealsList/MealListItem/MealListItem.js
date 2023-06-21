import ItemAmount from "./ItemAmount/ItemAmount";
import ItemContainer from "./MealListItem.styled";
import PriceContainer from "./MealPrice.styled";

const MealListItem = ({ name, description, price }) => {
  return (
    <ItemContainer>
      <div>
        <h3>{name}</h3>
        <span>{description}</span>
        <PriceContainer>{`$${price}`}</PriceContainer>
      </div>
      <div>
        <ItemAmount />
      </div>
    </ItemContainer>
  );
};

export default MealListItem;
