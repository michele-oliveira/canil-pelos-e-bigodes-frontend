export const registerUser = async (user) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
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
