import Recipe from '../../components/recipe';
import { getRecipeData, getFolderFilenames } from '../../utilities/page-data';

export async function getStaticProps({ params }) {
  return { props: getRecipeData(params.slug) };
}

export async function getStaticPaths() {
  const filenames = getFolderFilenames(`/data/recipes`);
  const paths = filenames.map((name) => ({ params: { slug: name.replace('.json', '') } }));

  return { paths, fallback: false };
}

export default Recipe;
