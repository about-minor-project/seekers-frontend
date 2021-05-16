import axios from "axios";
const baseUrl = "/api/notice";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const getById = async (id) => {
  const request = await axios.get(`${baseUrl}/${id}`);
  return request.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((res) => res.data);
};

const notices = {
  getAll,
  getById,
  create,
  update
};

export default notices;
