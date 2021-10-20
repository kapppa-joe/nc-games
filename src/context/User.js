import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userStored = localStorage.getItem("user");
  const [user, setUser] = useState(userStored ? JSON.parse(userStored) : null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
