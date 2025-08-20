import FoodCategory from './FoodCategories.jsx';
import './Food.css';

export default function FoodList(props) {
  return (
    <>
      <h1>Render Lists</h1>
      <div className='food-list'>
        <FoodCategory categoryName="Fruits" items={props.fruits} />
        <FoodCategory categoryName="Vegetables" items={props.vegetables} />
      </div>
    </>
  );
}
