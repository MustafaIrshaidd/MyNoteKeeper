import { Box } from "@mui/material";
import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import NotesProvider from "../../contexts/NotesContext";
import { LoaderContext } from "../../contexts/LoaderContext";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { startLoader } = useContext(LoaderContext);

  const handlePageNumberChange = (page) => {
    if (pageNumber === page) return;
    startLoader();
    setPageNumber(page);
  };

  return (
    <>
      <Box component="div">
        <NotesProvider page={pageNumber}>
          <Navbar/>
          <Main setPageNumber={handlePageNumberChange} />
        </NotesProvider>
      </Box>
    </>
  );
};

export default HomePage;
