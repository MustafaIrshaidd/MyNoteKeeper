import { Box, Container, Pagination, Stack } from "@mui/material";
import React from "react";
import AddNote from "./AddNote";
import NoteCardsContainer from "./NoteCardsContainer";

const Main = () => {
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
            <Pagination count={10} variant="outlined" color="primary" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Main;
