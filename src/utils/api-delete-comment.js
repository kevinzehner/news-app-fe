import axios from "axios";

export const deleteComment = (comment_id) => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/comments/${comment_id}`;

  return axios.delete(apiUrl);
};
