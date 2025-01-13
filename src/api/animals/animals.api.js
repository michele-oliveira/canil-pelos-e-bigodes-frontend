import BadRequestError from "../../errors/http/BadRequestError";
import NotFoundError from "../../errors/http/NotFoundError";
import UnauthorizedError from "../../errors/http/UnauthorizedError";
import { getJwt } from "../../utils/jwt";

export const listAnimals = async (page, limit, animalType = null) => {
  let url = `${process.env.REACT_APP_BACKEND_URL}/animals?page=${page}&limit=${limit}`;
  if (animalType) {
    url += `&animalType=${animalType}`;
  }

  try {
    const accessToken = getJwt();
    const response = await fetch(url, {
      headers: accessToken && {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const animals = await response.json();
    if (!response.ok) {
      if (response.status === 400) {
        throw new BadRequestError("Invalid request params");
      } else if (response.status === 404) {
        throw new NotFoundError("User not found");
      } else {
        throw new Error(response.statusText);
      }
    }
    return animals;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAnimal = async (animalId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/animals/${animalId}`
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError("Animal not found");
      } else {
        throw new Error(response.statusText);
      }
    }
    const vaccines = await response.json();
    return vaccines;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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

export const updateAnimal = async (updatedAnimalData) => {
  try {
    const accessToken = getJwt();

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/animals`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: updatedAnimalData,
      }
    );
    if (!response.ok && response.status === 401) {
      throw new UnauthorizedError("Unauthorized attempt to update an animal");
    }
    if (!response.ok && response.status === 404) {
      throw new NotFoundError("Animal not found");
    }
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const updatedAnimal = await response.json();
    return updatedAnimal;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
