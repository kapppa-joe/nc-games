import { useContext } from "react";
import { UserContext } from "../context/User";

function useUser() {
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("username");
  };

  const login = (username) => {
    console.log("logging in as", username);
    setUser(username);
    localStorage.setItem("username", username);
  };

  return { user, login, logout };
}

export default useUser;
