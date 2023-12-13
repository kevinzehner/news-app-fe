import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get("https://the-big-news-app.onrender.com/api/articles")

    .then((response) => response.data.articles);
};
