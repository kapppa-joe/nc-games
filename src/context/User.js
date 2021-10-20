import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currUser = localStorage.getItem("username") || "tickle122";
  console.log("UserProvider called");
  const [user, setUser] = useState(currUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
