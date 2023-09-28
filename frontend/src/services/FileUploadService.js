const newUpload = (inputs, path, file, headers) => {
  const formData = new FormData();

  if (file) formData.append("image", file);

  for (const [key, value] of Object.entries(inputs)) {
    formData.append(key, value);
  }

  return formData;
};

const updateUpload = (inputs, path, file, headers) => {
  const formData = new FormData();

  if (file) formData.append("image", file);

  for (const [key, value] of Object.entries(inputs)) {
    formData.append(key, value);
  }

  return formData;
};

const FileUploadService = {
  newUpload,
  updateUpload,
};

export default FileUploadService;
