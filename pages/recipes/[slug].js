import fs from 'fs';
import path from 'path';
import Recipe from '../../components/recipe';

export async function getStaticProps({ params }) {
  const recipeFile = path.join(process.cwd(), `/data/recipes/${params.slug}.json`);

  const data = fs.readFileSync(recipeFile, 'utf8');
  return { props: JSON.parse(data) };
}

export async function getStaticPaths() {
  const recipesFolder = path.join(process.cwd(), `/data/recipes`);
  const filenames = fs.readdirSync(recipesFolder);
  const paths = filenames.map((name) => ({ params: { slug: name.replace('.json', '') } }));

  return { paths, fallback: false };
}

export default Recipe;
