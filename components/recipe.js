import Instructions from './instructions';
import { Button } from 'semantic-ui-react';

const Recipe = ({ title, ingredients, broth }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Instructions name={'Broth'} {...broth} />
      <Button>Click Here</Button>
    </div>
  );
};

export default Recipe;
