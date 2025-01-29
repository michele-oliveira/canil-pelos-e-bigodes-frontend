import BadRequestError from "../../errors/http/BadRequestError";
import ConflictError from "../../errors/http/ConflictError";
import UnauthorizedError from "../../errors/http/UnauthorizedError";

export const registerUser = async (newUserData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/register`,
      {
        method: "POST",
        body: newUserData,
      }
    );
    if (!response.ok) {
      if (response.status === 400) {
        throw new BadRequestError("Request body is invalid");
      } else if (response.status === 409) {
        throw new ConflictError("Email is already registered");
      } else {
        throw new Error(response.statusText);
      }
    }
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      }
    );
    if (!response.ok && response.status === 401) {
      throw new UnauthorizedError("Invalid credentials");
    }
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const token = await response.json();
    return token;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
