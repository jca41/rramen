import Recipe from '../../components/recipe';
import { getRecipeData, getFolderFilenames, withoutExt, getRecipeSlugFromFilename } from '../../utilities/page-data';

export async function getStaticProps({ params }) {
  const recipes = getFolderFilenames(`/data/recipes`).map((filename) => {
    const { title } = getRecipeData(filename);

    return { slug: getRecipeSlugFromFilename(filename), title };
  });

  return { props: { ...getRecipeData(params.slug), recipes } };
}

export async function getStaticPaths() {
  const filenames = getFolderFilenames(`/data/recipes`);
  const paths = filenames.map((name) => ({ params: { slug: withoutExt(name) } }));

  return { paths, fallback: false };
}

export default Recipe;
