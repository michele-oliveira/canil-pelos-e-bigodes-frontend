import UnauthorizedError from "../../errors/http/UnauthorizedError";
import { getJwt } from "../../utils/jwt";

export const getVaccines = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/animals/vaccines`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const vaccines = await response.json();
    return vaccines;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const newAnimal = async (newAnimalData) => {
  try {
    const accessToken = getJwt();

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/animals`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: newAnimalData,
      }
    );
    if (!response.ok && response.status === 401) {
      throw new UnauthorizedError("Unauthorized attempt to register an animal");
    }
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const newAnimal = await response.json();
    return newAnimal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
