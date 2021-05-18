import axios from "axios";
const baseUrl = "/api/details";

const getDetails = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data
};

const details = {
  getDetails,
};

export default details;
