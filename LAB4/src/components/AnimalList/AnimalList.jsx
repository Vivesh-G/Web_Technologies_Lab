import AnimalCard from './AnimalCard.jsx';
import './Animal.css';

function AnimalCardList({ animals }) {
  return (
    <div>
      <h1>Animals</h1 >
      <div className='animal-list'>
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
}

export default AnimalCardList;
