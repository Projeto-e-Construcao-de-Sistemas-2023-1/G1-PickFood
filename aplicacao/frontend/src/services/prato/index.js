const criarPrato = ({
    idRestaurante,
    nome,
    tipo,
    preco,
    descricao,
    foto
}) => {

}

const buscarPratos = () => {
    return JSON.parse(localStorage.getItem("pratos"));
}

const atualizarPrato = (id, {
    nome,
    tipo,
    preco,
    descricao,
    foto
}) => {

}

const excluirPrato = (id) => {

}

export {
    criarPrato,
    buscarPratos,
    atualizarPrato,
    excluirPrato
}