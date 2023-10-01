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
    <Card sx={{ width: "100%", position: "relative" }}>
      <CardActionArea
        sx={{
          position: "relative",
          "@media (hover: hover)": {
            "&:hover .delete-icon": {
              visibility: "visible",
            },
          },
        }}>
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
          <Box
            sx={{ pt: 2.5, pb: 2.5, width: "90%", margin: "auto" }}
            display={"flex"}
            flexDirection={"column"}
            gap={"10px"}>
            <Skeleton variant="rectangular" height={"30px"}></Skeleton>
            <Skeleton variant="rectangular" width={"50%"}></Skeleton>
            <Skeleton variant="rectangular" width={"20%"}></Skeleton>
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
        {!isLoading && (
          <DeleteOutlineIcon
            onClick={handleDeleteClick}
            className="delete-icon"
            sx={{
              visibility: "visible",
              position: "absolute",
              right: "16px",
              bottom: "17px",
              "@media (hover: hover)": {
                visibility: "hidden",
                "&:hover": {
                  visibility: "visible !important",
                  cursor: "pointer",
                },
              },
            }}></DeleteOutlineIcon>
        )}
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
