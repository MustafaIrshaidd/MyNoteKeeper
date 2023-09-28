import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import styles from "./styles.module.css";
import shadows from "@mui/material/styles/shadows";
import FileField from "../FileField";
import { useFormik } from "formik";
import FileUploadService from "../../services/FileUploadService";
import { addNote } from "../../services/notesService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: 0,
  boxShadow: "none",
  padding: theme.spacing(1),
  textAlign: "start",
  color: theme.palette.text.secondary,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  margin: "auto",
  boxShadow: shadows[3],
  transition: theme.transitions.create("height"),
  overflow: "hidden",
}));

const initialValues = {
  title: "Title",
  content: "Take A Note...",
  image: undefined,
  previewImage: "",
};

const AddNote = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleExpand = () => {
    setIsClicked(true);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    const { image, previewImage, ...inputs } = formik.values;

    console.log(inputs);
    const formData = FileUploadService.newUpload(inputs, "/notes", image, {});

    addNote(formData);

    setIsClicked(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleClose,
  });

  const handleImageChange = async (file) => {
    // const value = await formik.setFieldValue("image", file);

    if (formik.values.previewImage)
      await formik.setFieldValue("previewImage", "");

    if (!formik.touched.image) await formik.setFieldTouched("image", true);
  };

  return (
    <StyledPaper
      sx={
        isClicked
          ? { height: { sm: "100%", lg: "108.5px" } }
          : { height: "67px" }
      }
      elevation={3}
      onClick={handleExpand}
      isClicked={isClicked}>
      <Stack
        display={"flex"}
        sx={{ flexDirection: { sm: "column", lg: "row" } }}
        justifyContent={"space-between"}
        flexGrow={1}>
        <Box
          sx={
            isClicked
              ? { display: "block", width: { sm: "100%", lg: "30%" } }
              : { display: "none" }
          }>
          <FileField
            image={formik.values.image}
            onImageChange={handleImageChange}
            onBlur={formik.handleBlur}
            initialPreviewImage={formik.values.previewImage}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
            className={styles["file-input_large"]}
          />
        </Box>
        <Stack
          flexGrow={1}
          justifyContent="space-between"
          spacing={2}
          position="relative"
          height="100%">
          <Item
            sx={
              isClicked
                ? { display: "block", width: "fit-content" }
                : { display: "none" }
            }>
            <Typography variant="body1" contentEditable>
              {formik.values.title}
            </Typography>
          </Item>
          <Item
            className={styles["take-note"]}
            sx={isClicked ? { left: "50%" } : { left: "5%" }}
            contentEditable>
            <Typography variant="body2">{formik.values.content}</Typography>
          </Item>
          <Item
            sx={
              isClicked
                ? {
                    visibility: "visible",
                    display: "flex",
                    justifyContent: "end",
                  }
                : { visibility: "hidden" }
            }>
            <Button onClick={handleClose}>Close</Button>
          </Item>
        </Stack>
      </Stack>
    </StyledPaper>
  );
};

export default AddNote;
