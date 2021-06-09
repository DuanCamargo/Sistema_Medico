let MEDICO = [
  {title: 'Ola', description: 'Ola', published: 'Published'},
  {title: 'Teste', description: 'Teste', published: 'Published'}
]

const getAll = () => {
  return MEDICO;
};

const getById = (title) => {
  if (title === "") return MEDICO
  //var filtrado = MEDICO.filter((obj) => { return obj.title == title; });  // retorna os objs que são iguais
  //var filtrado = MEDICO.filter((obj) => obj.title == title ); // retorna os objs que são iguais
  var filtrado = MEDICO.filter((obj) => obj.title.includes(title) ); // retorna os objs que contém 
  return filtrado

};

const create = (data) => {
  return MEDICO.push(data);
};

const update = (key, data) => {
  console.log(key)
  MEDICO.forEach(function(item) {
    if (item.title === key){
      item.title = data.title
      item.description = data.description
      item.published = data.published
    }
  });
  return 
};

const remove = (key) => {
  return MEDICO.splice(MEDICO.indexOf(key), 1);
};

const removeAll = () => {
  MEDICO=[]
};

export default {
  getAll,
  create,
  update,
  remove,
  removeAll,
  getById
};