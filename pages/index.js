import Homepage from '../components/homepage';
import { getRecipeData, getFolderFilenames, getRecipeSlugFromFilename } from '../utilities/page-data';

export async function getStaticProps() {
  const recipes = getFolderFilenames(`/data/recipes`).map((filename) => {
    const {
      title,
      images: [image],
      author,
    } = getRecipeData(filename);

    return { slug: getRecipeSlugFromFilename(filename), title, image, author };
  });

  return { props: { recipes } };
}

export default Homepage;
