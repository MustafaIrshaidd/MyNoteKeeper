import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, CardActionArea, Skeleton } from "@mui/material";

const NoteCard = ({ data, isLoading, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(data?._id);
  };

  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardActionArea>
        {isLoading ? (
          <Skeleton variant="rectangular" height={"140px"}></Skeleton>
        ) : (
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
        )}

        {isLoading ? (
          <Box sx={{ pt: 2.5 }} display={"flex"} flexDirection={"column"} gap={"10px"}>
            <Skeleton  variant="rectangular" height={"30px"}></Skeleton>
            <Skeleton variant="rectangular" width={"50%"}></Skeleton>
            <Skeleton
              variant="rectangular"
              width={"20%"}></Skeleton>
          </Box>
        ) : (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data?.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.content}
            </Typography>
            <Typography variant="body2" paddingTop={"20px"} color="primary">
              {data?.createdAt}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
      {!isLoading && (
        <DeleteOutlineIcon
          onClick={handleDeleteClick}
          sx={{
            "&hover": {
              cursor: "pointer",
            },
            position: "absolute",
            right: "16px",
            bottom: "17px",
          }}></DeleteOutlineIcon>
      )}
    </Card>
  );
};

export default NoteCard;
