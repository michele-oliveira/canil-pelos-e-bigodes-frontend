import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { getVaccines } from "../api/animals/animals.api";

const AnimalsContext = createContext(null);

const AnimalsProvider = ({ children }) => {
  const [vaccines, setVaccines] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchVaccines = useCallback(async () => {
    try {
      setLoading(true);
      const vaccines = await getVaccines();
      setVaccines(vaccines);
    } catch (error) {
      console.error("Error while fetching vaccines", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVaccines();
  }, [fetchVaccines]);

  const contextValue = useMemo(
    () => ({
      vaccines,
      loading,
      error,
    }),
    [vaccines, loading, error]
  );

  return (
    <AnimalsContext.Provider value={contextValue}>
      {children}
    </AnimalsContext.Provider>
  );
};

AnimalsProvider.propTypes = {
  children: PropTypes.node,
};

export { AnimalsContext, AnimalsProvider };
