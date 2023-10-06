import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import {
  Box,
  Button,
  CardActionArea,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Skeleton,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { deleteNote } from "../../../../../services/notesService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NoteCard = ({ data, isLoading, onDelete }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = async (event) => {
    setOpen(false);
    if (event.target.innerText === "DELETE") {
      await deleteNote(data.id);
      console.log("Note is Deleted")
    }
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
        ) : data.image ? (
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:3000/uploads/notes/${data.image}`}
            alt="image not found"
          />
        ) : (
          <Box
            height={"140px"}
            width={"100%"}
            color={"darkgray"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}>
            <SentimentSatisfiedAltIcon />
            <Typography variant="caption">Why Not Upload Image</Typography>
          </Box>
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
          <Button
            onClick={handleOpen}
            variant="outlined"
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
            }}>
            <DeleteOutlineIcon className="delete-icon"></DeleteOutlineIcon>
          </Button>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          minWidth={"lg"}
          TransitionComponent={Transition}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">
            {"Confirm Deletion"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Do you really want to DELETE this note ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button
              onClick={handleClose}
              variant="contained"
              autoFocus
              color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </CardActionArea>
    </Card>
  );
};

export default NoteCard;
