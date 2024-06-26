import PropTypes from "prop-types";
import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [, setToken] = useLocalStorage("token", null);

  const isLoggedIn = !!user;

  const login = (loginResponse) => {
    const user = loginResponse[0];
    const sanitizedUser = { ...user, Password: null };
    setUser(sanitizedUser);
    setToken(user.token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserProvider, UserContext };
