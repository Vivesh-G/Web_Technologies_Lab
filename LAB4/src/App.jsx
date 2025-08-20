import AnimalList from './components/AnimalList/AnimalList.jsx';
import FoodList from './components/FoodList/FoodList.jsx';
import ProductTable from './components/ProductList/ProductList.jsx';
import "./App.css";

function App() {
  // HardCoded Data from the UI Images
  const animals = [
    { name: 'Lion', scientificName: 'Panthera leo', weight: '140kg', diet: 'meat.' },
    { name: 'Gorilla', scientificName: 'Gorilla beringei', weight: '205kg', diet: 'plants, insects.' },
    { name: 'Zebra', scientificName: 'Equus quagga', weight: '322kg', diet: 'plants.' }
  ];

  const fruits = [
    { name: 'apple', calories: 95 },
    { name: 'orange', calories: 45 },
    { name: 'banana', calories: 105 },
    { name: 'coconut', calories: 159 },
    { name: 'pineapple', calories: 37 }
  ];

  const vegetables = [
    { name: 'potatoes', calories: 110 },
    { name: 'celery', calories: 15 },
    { name: 'carrots', calories: 25 },
    { name: 'corn', calories: 63 },
    { name: 'broccoli', calories: 50 }
  ];

  const products = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
  ];

  return (
    <div className="container">
      <ProductTable products={products} />
      <FoodList fruits={fruits} vegetables={vegetables} />
      <AnimalList animals={animals} />
    </div>
  );
}

export default App;              