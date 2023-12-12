import axios from "axios";

export const fetchComments = (article_id) => {
  return axios
    .get(
      `https://the-big-news-app.onrender.com/api/articles/${article_id}/comments`
    )
    .then((response) => response.data.comments);
};
