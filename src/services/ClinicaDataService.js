let PRODUCTS =[
    {title: 'Ola', description: 'Ola', telefone: '',published: 'Published'},
    {title: 'Teste', description: 'Teste', telefone: '',published: 'Published'}
]

//RETORNA OS DADOS
const getAll = () => {
    return PRODUCTS;
};

const getById = (title) => {
    if (title === "") return PRODUCTS
    var filtrado = PRODUCTS.filter((obj) => obj.title.includes(title) );
    return filtrado
};

// colocando itens do formulário na variável PRODUCTS.
const create = (data) => { 
    return PRODUCTS.push(data);
}

const update = (key, data) => {
    console.log(key)
    PRODUCTS.forEach(function(item) {
        if (item.title === key){
            item.title = data.title;
            item.description = data.description;
            item.published = data.published;
        }
    });
    return
}

const remove = (title) => {
    var objetos = PRODUCTS.filter( item => item.title === title ? false : true)
    PRODUCTS = objetos;
}

const removeAll = () => {
    var objetos = PRODUCTS.filter( item => false)
    PRODUCTS = objetos;
}

export default {
    getAll,
    create,
    update,
    getById,
    remove,
    removeAll
};