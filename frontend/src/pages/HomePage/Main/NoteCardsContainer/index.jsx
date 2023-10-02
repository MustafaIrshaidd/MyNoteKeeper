import React, { useContext } from "react";
import { Grid } from "@mui/material";
import NoteCard from "./NoteCard";
import { LoaderContext } from "../../../../contexts/LoaderContext";
import { NotesContext } from "../../../../contexts/NotesContext";

const NoteCardsContainer = () => {
  const { isLoading } = useContext(LoaderContext);
  const { data } = useContext(NotesContext);

  const LoadingCardsNumber = 10;

  return (
    <Grid container spacing={2} minHeight={"calc(100vh - 370px)"}>
      {isLoading
        ? Array(LoadingCardsNumber)
            .fill(0)
            .map(() => {
              return (
                <Grid item xs={12} md={6} lg={2.4}>
                  <NoteCard data={{}} isLoading={isLoading} />
                </Grid>
              );
            })
        : data.result.map((item, index) => (
            <Grid item xs={12} md={6} lg={2.4}>
              <NoteCard data={item} />
            </Grid>
          ))}
    </Grid>
  );
};

export default NoteCardsContainer;
