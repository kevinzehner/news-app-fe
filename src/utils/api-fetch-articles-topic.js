import axios from "axios";

export const getArticlesByTopic = (topicSlug) => {
  console.log(topicSlug);
  return axios
    .get(
      `https://the-big-news-app.onrender.com/api/articles?topic=${topicSlug}`
    )
    .then((response) => {
      console.log(response.data.articles);
      return response.data.articles;
    })
    .catch((error) => {
      console.log(error);
    });
};
