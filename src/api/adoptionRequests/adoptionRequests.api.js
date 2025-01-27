import { getJwt } from "../../utils/jwt";
import NotFoundError from "../../errors/http/NotFoundError";
import ConflictError from "../../errors/http/ConflictError";
import BadRequestError from "../../errors/http/BadRequestError";

export const newAdoptionRequest = async (animalId) => {
  const requestBody = JSON.stringify({ animal_id: animalId });
  try {
    const accessToken = getJwt();

    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/adoption-requests`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: requestBody,
      }
    );
    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError(response.statusText);
      } else if (response.status === 409) {
        throw new ConflictError(response.statusText);
      } else {
        throw new Error(response.statusText);
      }
    }
    const adoptionRequest = await response.json();
    return adoptionRequest;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAdoptionRequests = async (page, limit, type = null) => {
  let url = `${process.env.REACT_APP_BACKEND_URL}/adoption-requests?page=${page}&limit=${limit}`;
  if (type) {
    url += `&type=${type}`;
  }

  try {
    const accessToken = getJwt();
    const response = await fetch(url, {
      headers: accessToken && {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const animals = await response.json();
    if (!response.ok && response.status === 400) {
      if (response.status === 400) {
        throw new BadRequestError("Invalid request params");
      } else {
        throw new Error(response.statusText);
      }
    }
    return animals;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
