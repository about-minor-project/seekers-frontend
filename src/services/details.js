import axios from "axios";
const baseUrl = "/api/details";

const getDetails = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`);
  return request.data
};

const details = {
  getDetails,
};

export default details;
