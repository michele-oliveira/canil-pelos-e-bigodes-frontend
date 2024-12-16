import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

/**
 * User object shape.
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * Set user function signature.
 * @callback SetUser
 * @param {string} jwtToken - The JWT token to set the user from.
 */

/**
 * Clear user function signature.
 * @callback ClearUser
 */

/**
 * @returns {{ user: User|null, setUser: SetUser, clearUser: ClearUser }}
 */
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
