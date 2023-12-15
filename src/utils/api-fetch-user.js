import axios from "axios";

const getUser = () => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/users/`;

  return axios.get(apiUrl).then((res) => {
    return res.data.users[1];
  });
};

export default getUser;
