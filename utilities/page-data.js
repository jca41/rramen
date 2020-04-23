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

export const getRecipeData = (location) => {
  const filename = location.includes('.json') ? location : `${location}.json`;
  const recipe = getFileData(`/data/recipes/${filename}`);

  return { ...recipe, author: recipe.author ? getFileData(`/data/authors/${recipe.author}.json`) : {} };
};

export const withoutExt = (filename) => filename.replace('.json', '');

export const getRecipeSlugFromFilename = (filename) => `/recipes/${withoutExt(filename)}`;
