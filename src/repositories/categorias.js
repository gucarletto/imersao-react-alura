import config from '../config';

function getAllCategories() {
  const URL_CATEGORIAS = `${config.URL}/categorias`;
  return fetch(URL_CATEGORIAS)
    .then(async (response) => {
      if (response.ok) {
        const jsonCategories = await response.json();
        return jsonCategories;
      }
      throw Error('Não foi possível pegar os dados');
    });
}

function getAllCategoriesWithVideos() {
  const URL_CATEGORIAS = `${config.URL}/categorias?_embed=videos`;
  return fetch(URL_CATEGORIAS)
    .then(async (response) => {
      if (response.ok) {
        const jsonCategories = await response.json();
        return jsonCategories;
      }
      throw Error('Não foi possível pegar os dados');
    });
}

export default {
  getAllCategories,
  getAllCategoriesWithVideos,
};
