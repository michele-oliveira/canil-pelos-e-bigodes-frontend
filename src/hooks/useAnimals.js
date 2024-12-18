import { useContext } from "react";
import { AnimalsContext } from "../providers/AnimalsProvider";

/**
 * Gender object shape.
 * @typedef {Object} Vaccine
 * @property {string} id
 * @property {string} name
 * @property {"cat" | "dog"} type
 */

/**
 * @returns {{ vaccines: Vaccine[], loading: boolean, error: boolean }}
 */
export const useAnimals = () => {
  const context = useContext(AnimalsContext);

  if (!context) {
    throw new Error("useAnimals must be used within a AnimalsProvider");
  }

  return context;
};
