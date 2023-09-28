// Global Variables
import { apiUtils } from "../utils/api.js";

const BASE_URL = "http://localhost:3000/notes";

// POST METHODS
export const addNote = async (data) => {
  const results = apiUtils.post(BASE_URL, data);
  return results;
};
