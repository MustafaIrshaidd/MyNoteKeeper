import { Box, Container, Pagination, Stack } from "@mui/material";
import React, { useContext } from "react";
import AddNote from "./AddNote";
import NoteCardsContainer from "./NoteCardsContainer";
import { LoaderContext } from "../../../contexts/LoaderContext";

const Main = ({setPageNumber}) => {
  // const [pageNumber, setPageNumber] = useState(1);
  const { startLoader } = useContext(LoaderContext);

  // const { data, error, setData } = useFetch(
  //   `http://localhost:3000/notes?page=${pageNumber}`
  // );

  // useEffect(() => {
  //   if (data) {
  //     stopLoader();
  //   } else {
  //     startLoader();
  //   }
  // }, [data]);

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
            <NoteCardsContainer/>
          </Box>
          <Box component="section" margin={"auto"}>
            <Pagination
              count={10}
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
