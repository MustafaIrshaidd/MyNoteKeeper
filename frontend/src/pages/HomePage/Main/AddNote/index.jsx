import React, { useState } from "react";
import { Box, Button, Input } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import styles from "./styles.module.css";
import shadows from "@mui/material/styles/shadows";
import FileField from "../../../../components/FileField";
import { useFormik } from "formik";
import FileUploadService from "../../../../services/FileUploadService";
import { addNote } from "../../../../services/notesService";

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

  const handleClose = async () => {
    const { image, previewImage, ...inputs } = formik.values;

    const formData = FileUploadService.newUpload(inputs, image);

    console.log(await addNote(formData));

    setIsClicked(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleClose,
  });

  const handleImageChange = async (file) => {
    await formik.setFieldValue("image", file);

    if (formik.values.previewImage)
      await formik.setFieldValue("previewImage", "");

    if (!formik.touched.image) await formik.setFieldTouched("image", true);
  };

  return (
    <form
      method="POST"
      enctype="multipart/form-data"
      onSubmit={formik.handleSubmit}>
      <StyledPaper
        sx={
          isClicked
            ? { height: { sm: "306.5px", lg: "185px" } }
            : { height: "67px" }
        }
        elevation={3}
        onClick={handleExpand}
        isClicked={isClicked}>
        <Stack
          display={"flex"}
          sx={{ flexDirection: { sm: "column", lg: "row" }, gap: "5px" }}
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
            alignItems={"space-between"}
            spacing={2}
            position="relative">
            <Item
              sx={
                isClicked
                  ? { display: "block", width: "fit-content" }
                  : { display: "none" }
              }>
              <Input
                variant="body2"
                id="title"
                name="title"
                onChange={formik.handleChange}
                placeholder={formik.values.title}
              />
            </Item>
            <Item
              className={styles["take-note"]}
              sx={
                isClicked
                  ? { visibility: "hidden", left: "50%" }
                  : { visibility: "visible", left: "70px" }
              }>
              Take A Note...
            </Item>
            <Item
              className={styles["take-note"]}
              sx={
                isClicked
                  ? { visibility: "visible", left: "50%" }
                  : { visibility: "hidden", left: "5%" }
              }>
              <Input
                variant="body2"
                id="content"
                name="content"
                onChange={formik.handleChange}
                placeholder={formik.values.content}
              />
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
              <Button sx={{ color: "#222222" }} type="submit">
                Close
              </Button>
            </Item>
          </Stack>
        </Stack>
      </StyledPaper>
    </form>
  );
};

export default AddNote;
