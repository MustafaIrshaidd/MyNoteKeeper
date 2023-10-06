import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoaderContext } from "./LoaderContext";
import useFetch from "../hooks/useFetch";

const BASE_URL = "http://localhost:3000/notes";

export const NotesContext = createContext();

const NotesProvider = ({ children, page }) => {
  const { startLoader, stopLoader } = useContext(LoaderContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const getURL = () => {
    if (searchQuery === "") {
      return `${BASE_URL}?page=${page}`;
    } else {
      return `${BASE_URL}/search/${searchQuery}?page=${page}`;
    }
  };

  const [URL, setURL] = useState(getURL);

  const { data, error } = useFetch(URL);

  useEffect(() => {
    if (data) {
      stopLoader();
    } else {
      startLoader();
    }
  }, [data]);

  const handleSearch = async (query, page) => {
    try {
      startLoader();
      const response = await fetch(`${BASE_URL}/search/${query}?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }
      const searchData = await response.json();
      setSearchResults(searchData);
      stopLoader();
    } catch (error) {
      console.error("Error while searching:", error);
      stopLoader();
    }
  };

  useEffect(() => {
    if (searchQuery !== "") {
      setURL(getURL());
      handleSearch(searchQuery, page);
    }
    else{
      setURL(getURL())
    }
  }, [searchQuery, page]);

  return (
    <NotesContext.Provider value={{ data, error, searchQuery, setSearchQuery, searchResults }}>
      {children || <Outlet />}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
