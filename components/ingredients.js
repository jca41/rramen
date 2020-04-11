const Ingredients = ({ data = [] }) => {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {data.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
