import axios from "axios";

export const postComment = (articleId, newComment) => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/articles/${articleId}/comments`;

  return axios.post(apiUrl, newComment).then((response) => {
    return response.data.comment;
  });
};
