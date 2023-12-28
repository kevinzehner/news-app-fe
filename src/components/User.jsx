import { useState, useEffect } from "react";

import getUser from "../utils/api-fetch-user";

const User = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUser()
      .then((user) => {
        setUserData(user);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <div className="user-container">
      <p>
        Logged in as <span className="bold">{userData.username}</span>
      </p>
      <img className="avatar-img" src={userData.avatar_url} />
    </div>
  );
};

export default User;
