import { useState, useEffect } from "react";

import getUser from "../utils/api-fetch-user";

const User = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser().then((user) => {
      setUserData(user);
    });
  }, []);

  return (
    <div>
      <p>Logged in as {userData.username}</p>
    </div>
  );
};

export default User;
