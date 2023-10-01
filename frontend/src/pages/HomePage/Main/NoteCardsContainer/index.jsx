import React from "react";
import { Grid } from "@mui/material";
import NoteCard from "./NoteCard";

const NoteCardsContainer = () => {
  const iterationCount = 10;
  const data = {
    title: "hello",
    content: "there",
    createdAt: "29/10/2023",
    image: "",
    _id: "sdat32523rfasfrq",
  };

  const NoteCards = Array.from({ length: iterationCount });

  return (
    <Grid container spacing={2}>
      {NoteCards.map((_, index) => (
        <Grid item key={index} xs={12} md={6} lg={2.4}>
          <NoteCard data={data} isLoading={true} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NoteCardsContainer;
