import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { decodeJwt, isValidJwt } from "../utils/jwt";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const setNewUser = useCallback((jwtToken) => {
    if (!jwtToken || !isValidJwt(jwtToken)) {
      throw new Error("JWT token is invalid or was not provided");
    }

    const decodedJwt = decodeJwt(jwtToken);

    setUser({
      id: decodedJwt.id,
      name: decodedJwt.name,
      email: decodedJwt.email,
    });
  }, []);

  const clearUser = useCallback(() => {
    setUser(null);
    localStorage.removeItem("accessToken");
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("accessToken");

    if (jwt) {
      setNewUser(jwt);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      setUser: setNewUser,
      clearUser,
    }),
    [user, setNewUser, clearUser]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { AuthContext, AuthProvider };
