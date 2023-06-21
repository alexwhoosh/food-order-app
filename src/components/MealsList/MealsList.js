import ListContainer from "./MealsList.styled";
import MealListItem from "./MealListItem/MealListItem";
import Card from "../Card.styled";

const MealsList = ({ items }) => {
  return (
    <Card>
      <ListContainer>
        <ul>
          {items.map((dish) => (
            <MealListItem
              key={dish.id}
              name={dish.name}
              description={dish.description}
              price={dish.price}
            />
          ))}
        </ul>
      </ListContainer>
    </Card>
  );
};

export default MealsList;
