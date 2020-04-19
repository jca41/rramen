import fs from 'fs';
import path from 'path';

const getFullPath = (location) => path.join(process.cwd(), location);

const getFileData = (location) => {
  try {
    return JSON.parse(fs.readFileSync(getFullPath(location), 'utf8'));
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getFolderFilenames = (location) => {
  const filenames = path.join(process.cwd(), location);
  return fs.readdirSync(getFullPath(location));
};

export const getRecipeData = (slug) => {
  const recipe = getFileData(`/data/recipes/${slug}.json`);

  return { ...recipe, author: recipe.author ? getFileData(`/data/authors/${recipe.author}.json`) : {} };
};
