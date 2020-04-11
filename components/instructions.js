import Ingredients from './ingredients';
import Steps from './steps';

const Instructions = ({ name, ingredients, steps }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Ingredients data={ingredients} />
      <Steps data={steps} />
    </div>
  );
};

export default Instructions;
