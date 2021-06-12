let PRODUCTS =[
    {name: 'Ola', address: 'Ola', telephone: ''},
    {name: 'Teste', address: 'Teste', telephone: ''}
]

//RETORNA OS DADOS
const getAll = () => {
    return PRODUCTS;
};

const getById = (name) => {
    if (name === "") return PRODUCTS
    var filtrado = PRODUCTS.filter((obj) => obj.name.includes(name) );
    return filtrado
};

// colocando itens do formulário na variável PRODUCTS.
const create = (data) => { 
    return PRODUCTS.push(data);
}

const update = (key, data) => {
    console.log(key)
    PRODUCTS.forEach(function(item) {
        if (item.name === key){
            item.name = data.name;
            item.address = data.address;
            item.telephone = data.telephone;
        }
    });
    return
}

const remove = (name) => {
    var objetos = PRODUCTS.filter( item => item.name === name ? false : true)
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