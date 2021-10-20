import { useContext } from "react";
import { UserContext } from "../context/User";
import { getUserByUsername } from "../utils/api";

function useUser() {
  const { user, setUser } = useContext(UserContext);
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const login = (username) => {
    return getUserByUsername(username).then((userFromApi) => {
      if (userFromApi) {
        setUser(userFromApi);
        localStorage.setItem("user", JSON.stringify(userFromApi));
      }
    });
  };

  return { user, login, logout };
}

export default useUser;
