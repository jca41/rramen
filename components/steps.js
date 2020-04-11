const Steps = ({ data = [] }) => {
  return (
    <div>
      <h3>Steps:</h3>
      <ol>
        {data.map((name) => (
          <li>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Steps;
