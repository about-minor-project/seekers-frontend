import axios from "axios";
const baseUrl = "/api/notice";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const deleteById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data;
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = (id, newObject) => {
  const response = axios.put(`${baseUrl}/${id}`, newObject);
  return response.then((res) => res.data);
};

const notices = {
  getAll,
  getById,
  deleteById,
  create,
  update
};

export default notices;
