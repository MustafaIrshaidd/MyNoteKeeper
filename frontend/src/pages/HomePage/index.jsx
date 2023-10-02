import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import NotesProvider from "../../contexts/NotesContext";

const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumberChange = (page) => {
    setPageNumber(page);
  };

  return (
    <>
      <Box component="div">
        <Navbar></Navbar>
        <NotesProvider page={pageNumber}>
          <Main setPageNumber={handlePageNumberChange} />
        </NotesProvider>
      </Box>
    </>
  );
};

export default HomePage;
