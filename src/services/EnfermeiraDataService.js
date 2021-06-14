import http from "../http-common";

const getAll = () => {
  return http.get("/Enfermeira");
};
const get = id => {
  return http.get(`/Enfermeira/${id}`);
};
const create = data => {
  return http.post("/Enfermeira", data);
};
const update = (id, data) => {
  return http.put(`/Enfermeira/${id}`, data);
};
const remove = id => {
  return http.delete(`/Enfermeira/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Enfermeira`);
};
const findByTitle = (search) => {
  return http.get(`/Enfermeira?firstName=${search}`);
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