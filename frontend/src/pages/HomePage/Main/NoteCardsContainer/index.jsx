import { Grid } from "@mui/material";
import React from "react";
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
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
      <Grid item xs={12} md={6} lg={2.4}>
        <NoteCard data={data} isLoading={false}></NoteCard>
      </Grid>
    </Grid>
  );
};

export default NoteCardsContainer;
