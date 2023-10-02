import React, { createContext, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { LoaderContext } from "./LoaderContext";
import useFetch from "../hooks/useFetch";

export const NotesContext = createContext();

const NotesProvider = ({ children, page }) => {
  const { startLoader, stopLoader } = useContext(LoaderContext);

  const { data, error } = useFetch(`http://localhost:3000/notes?page=${page}`);

  useEffect(() => {
    if (data) {
      stopLoader();
    } else {
      startLoader();
    }
  }, [data]);

  return (
    <NotesContext.Provider value={{ data, error }}>
      {children || <Outlet />}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
