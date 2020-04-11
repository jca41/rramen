import fs from 'fs';
import path from 'path';
import Recipe from '../../components/recipe';

export async function getStaticProps({ params }) {
  const recipeFile = path.join(process.cwd(), `/data/${params.slug}.json`);

  const data = fs.readFileSync(recipeFile, 'utf8');
  return { props: JSON.parse(data) };
}

export async function getStaticPaths() {
  const recipesFolder = path.join(process.cwd(), `/data`);
  const filenames = fs.readdirSync(recipesFolder);

  const paths = filenames.map((name) => {
    const recipeFile = path.join(recipesFolder, name);
    const { slug } = JSON.parse(fs.readFileSync(recipeFile, 'utf8'));

    return slug;
  });

  return { paths: ['/recipes/miso-ramen'], fallback: false };
}

export default Recipe;
