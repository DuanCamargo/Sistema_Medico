let MEDICOS = [
  {title: 'Ola', description: 'Ola', published: 'Published'},
  {title: 'Teste', description: 'Teste', published: 'Published'}
]

const getAll = () => {
  return MEDICOS;
};

const getById = (title) => {
  if (title === "") return MEDICOS
  //var filtrado = MEDICOS.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = MEDICOS.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = MEDICOS.filter((obj) => obj.title.includes(title) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return MEDICOS.push(data);
};

const update = (key, data) => {
  console.log(key)
  MEDICOS.forEach(function(item) {
    if (item.title === key){
      item.title = data.title
      item.description = data.description
      item.published = data.published
    }
  });
  return 
};

const remove = (key) => {
  return MEDICOS.splice(MEDICOS.indexOf(key), 1);
};

const removeAll = () => {
  MEDICOS=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};