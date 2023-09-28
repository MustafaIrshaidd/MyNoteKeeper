import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import "./styles.css";

const FileField = ({
  initialPreviewImage,
  error,
  helperText,
  image,
  onImageChange,
  onBlur,
  className,
}) => {
  const [previewImage, setPreviewImage] = useState("");
  const [isDraggedIn, setIsDraggedIn] = useState(false);

  const selectImage = (event) => {
    const selectedFiles = event.target.files;
    onImageChange(selectedFiles[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles[0]));
  };

  const handleDragFile = (event) => {
    event.preventDefault();
    const selectedFiles = event.dataTransfer.files;
    onImageChange(selectedFiles[0]);
    setPreviewImage(URL.createObjectURL(selectedFiles[0]));
    toggleIsDraggedIn(event, false);
  };

  const toggleIsDraggedIn = (event, newState) => {
    event.preventDefault();
    setIsDraggedIn(newState);
  };

  return (
    <Box component={"div"} sx={{ width: "100%", height: "100%" }}>
      <label
        htmlFor="file-input"
        className={
          "file-input" +
          (error && (!initialPreviewImage || previewImage)
            ? " file-input_error "
            : " ") +
          className
        }
        onDragOver={(evt) => toggleIsDraggedIn(evt, true)}
        onDragEnter={(evt) => toggleIsDraggedIn(evt, true)}
        onDragLeave={(evt) => toggleIsDraggedIn(evt, false)}
        onDrop={(e) => handleDragFile(e)}
        onBlur={onBlur}>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={selectImage}
        />

        {(previewImage || initialPreviewImage) && !isDraggedIn ? (
          <>
            <div className="file-input__image">
              <img
                className="preview"
                src={previewImage || initialPreviewImage}
                alt=""
              />
            </div>
            <div
              className={
                "file-input__name" + (error ? " file-input__name_error" : "")
              }>
              {image && image.name}
            </div>
          </>
        ) : (
          <>
            <FileUploadIcon fontSize="inherit" />
            <div className="file-input__placeholder">
              {isDraggedIn ? "Drop to upload" : "Browse or drop Image"}
            </div>
          </>
        )}
      </label>
      {error && (!initialPreviewImage || previewImage) && (
        <Typography variant="caption" className="file-input__error-message">
          {helperText}
        </Typography>
      )}
    </Box>
  );
};

export default FileField;
