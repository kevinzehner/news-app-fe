import axios from "axios";

const getallUsers = () => {
  const apiUrl = `https://the-big-news-app.onrender.com/api/users/`;

  return axios.get(apiUrl).then((res) => {
    return res.data.users;
  });
};

export default getallUsers;
