import { Box, Container, Pagination, Stack } from "@mui/material";
import React, { useContext } from "react";
import AddNote from "./AddNote";
import NoteCardsContainer from "./NoteCardsContainer";
import { LoaderContext } from "../../../contexts/LoaderContext";
import { NotesContext } from "../../../contexts/NotesContext";

const Main = ({ setPageNumber }) => {
  const { startLoader } = useContext(LoaderContext);
  const { data } = useContext(NotesContext);

  const handlePageChange = (event, page) => {
    startLoader();
    setPageNumber(page);
  };

  return (
    <Box component="main">
      <Container maxWidth="80%">
        <Stack direction={"column"} gap={"6vh"} margin={"6vh 0"}>
          <Box component="section">
            <Container
              sx={{
                width: { md: "100%", lg: "80%" },
                padding: "0px !important",
              }}>
              <AddNote />
            </Container>
          </Box>
          <Box component="section">
            <NoteCardsContainer />
          </Box>
          <Box component="section" margin={"auto"}>
            <Pagination
              count={data?.pages}
              variant="outlined"
              color="primary"
              onChange={handlePageChange}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Main;
