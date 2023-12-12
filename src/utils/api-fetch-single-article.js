import axios from "axios";

export const fetchSingleArticle = (article_id) => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/articles/${article_id}`;

  return axios.get(apiUrl).then((response) => {
    console.log(response.data.article);
    return response.data.article;
  });
};
