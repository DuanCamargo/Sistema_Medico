import http from "../http-clinica";

const getAll = () => {
  return http.get("/Clinica");
};

const get = id => {
  return http.get(`/Clinica/${id}`);
};

const create = data => {
  return http.post("/Clinica", data);
};

const update = (id, data) => {
  return http.put(`/Clinica/${id}`, data);
};

const remove = id => {
  return http.delete(`/Clinica/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Clinica`);
};

const findByTitle = title => {
  return http.get(`/Clinica?name=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};