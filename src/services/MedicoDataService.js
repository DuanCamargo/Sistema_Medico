import http from "../http-common";

const getAll = () => {
  return http.get("/Medico");
};
const get = id => {
  return http.get(`/Medico/${id}`);
};
const create = data => {
  return http.post("/Medico", data);
};
const update = (id, data) => {
  return http.put(`/Medico/${id}`, data);
};
const remove = id => {
  return http.delete(`/Medico/${id}`);
};
//Nao tem esse endpoint no mockAPI
const removeAll = () => {
  return http.delete(`/Medico`);
};
const findByTitle = (search) => {
  return http.get(`/Medico?firstName=${search}`);
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