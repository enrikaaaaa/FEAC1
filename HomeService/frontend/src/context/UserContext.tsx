import React, { ReactNode, createContext } from "react";

import PropTypes from "prop-types";
import { useLocalStorage } from "usehooks-ts";

interface User {
  _id: string;
  Name: string;
  Email: string;
  Password: string;
  token: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (loginResponse: { status: string; token: string; user: User }) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const login = (loginResponse: {
    status: string;
    token: string;
    user: User;
  }) => {
    if (loginResponse.status === "success") {
      const { user, token } = loginResponse;
      const sanitizedUser = { ...user, Password: "" };
      setUser(sanitizedUser);
      setToken(token);
    } else {
      console.error("Login failed");
    }
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
