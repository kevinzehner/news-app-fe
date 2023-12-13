import axios from "axios";

export const voteArticle = (articleId, voteCount) => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/articles/${articleId}`;
  const data = { inc_votes: voteCount };

  return axios.patch(apiUrl, data).then((response) => {
    return response.data.article;
  });
};
