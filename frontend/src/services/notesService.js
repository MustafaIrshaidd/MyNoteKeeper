import apiUtils from "../utils/api";

// Global Variables
const BASE_URL = "http://localhost:3000/notes";

// POST METHODS
export const addNote = async (data) => {
  const results = await apiUtils.post(BASE_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return results;
};
