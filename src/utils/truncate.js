export const truncateArticle = (article) => {
  if (article.length > 150) {
    return article.slice(0, 150) + "...";
  }
};
