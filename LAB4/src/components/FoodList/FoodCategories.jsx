import FoodItem from './FoodItems.jsx';

function FoodDisplay({ categoryName, items }) {
  return (
    <div>
      <h3>{categoryName}</h3>
      {items.map((item, index) => (
        <FoodItem key={index} {...item} />
      ))}
    </div>
  );
}
export default FoodDisplay;
