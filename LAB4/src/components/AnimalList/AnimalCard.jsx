function AnimalCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p><b>{props.scientificName}</b></p>
      <p><b>{props.weight}</b></p>
      <p>{props.diet}</p>
    </div>
  );
}

export default AnimalCard;
