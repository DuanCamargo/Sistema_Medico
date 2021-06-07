let Enfermeira = [
    {titulo: 'Ola', descricao: 'Ola', published: 'Published'},
    {titulo: 'Teste', descricao: 'Teste', published: 'Published'}
  ]
  
  const getAll = () => {
    return Enfermeira;
  };
  
  const getById = (titulo) => {
    if (titulo === "") return Enfermeira
    //var filtrado = Enfermeira.filter((obj) => { return obj.titulo == titulo; });  // retorna os objs que são iguais
    //var filtrado = Enfermeira.filter((obj) => obj.titulo == titulo ); // retorna os objs que são iguais
    var filtrado = Enfermeira.filter((obj) => obj.titulo.includes(titulo) ); // retorna os objs que contém 
    return filtrado
  
  };
  
  const create = (data) => {
    return Enfermeira.push(data);
  };
  
  const update = (key, data) => {
    console.log(key)
    Enfermeira.forEach(function(item) {
      if (item.titulo === key){
        item.titulo = data.titulo
        item.descricao = data.descricao
        item.published = data.published
      }
    });
    return 
  };
  
  const remove = (key) => {
    return Enfermeira.splice(Enfermeira.indexOf(key), 1);
  };
  
  const removeAll = () => {
    Enfermeira=[]
  };
  
  export default {
    getAll,
    create,
    update,
    remove,
    removeAll,
    getById
  };