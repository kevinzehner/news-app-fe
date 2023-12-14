import { createContext, useState, useEffect } from "react";
import getUser from "../../utils/api-fetch-user";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((userData) => {
      setUser(userData);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
