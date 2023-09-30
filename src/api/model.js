import axios from "axios";

export async function postPredicationInput(formdata) {
  try {
    return await axios.post("http://localhost:5000", {
      ...formdata,
    });
  } catch (error) {
    throw error;
  }
}
