import { v4 as uuid } from "uuid";

const criarPrato = ({
    idRestaurante,
    nome,
    tipo,
    preco,
    descricao,
    foto
}) => {

    const prato = {
        id: uuid(),
        idRestaurante,
        nome,
        tipo,
        preco: Number.parseFloat(preco),
        descricao,
        foto
    }

    console.log("entrei");

    let pratos = buscarPratos();

    if (pratos === null || pratos.length === 0) {
        localStorage.setItem("pratos", JSON.stringify([ prato ]));

        return prato;
    }

    pratos.push(prato);

    localStorage.setItem("pratos", JSON.stringify(pratos));

    return prato;
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
    let pratos = buscarPratos();
    let indice;

    for (const i in pratos) {

        if (pratos[i].id === id) {
            indice = i;
        }
    }

    pratos[indice] = {
        ...pratos[indice],
        nome,
        tipo,
        preco: Number.parseFloat(preco),
        descricao,
        foto
    }

    localStorage.setItem("pratos", JSON.stringify(pratos));
}

const excluirPrato = (id) => {
    let pratos = buscarPratos();
    let indice;

    for (const i in pratos) {

        if (pratos[i].id === id) {
            indice = i;
        }
    }

    pratos.splice(indice, 1);

    localStorage.setItem("pratos", JSON.stringify(pratos));
}

const buscarPratosPorRestaurante = (idRestaurante) => {
    const pratos = buscarPratos();
    let pratosRestaurante = [];

    if( pratos === null) return;
    for (const prato of pratos) {
        if (prato.idRestaurante === idRestaurante) {
            pratosRestaurante.push(prato);
        }
    }

    return pratosRestaurante;
}

const buscarPratosPorNome = ({
    nome
}) => {
    const pratos = buscarPratos();
    let pratosBuscados = [];

    if (pratos === null) {
        return []
    }

    for (const prato of pratos) {
        
        if (prato.nome.includes(nome)) {
        
            pratosBuscados.push(prato);
        }
    }

    return pratosBuscados;
}

const buscarPratoPorId = (id) => {
    const pratos = buscarPratos();

    if (pratos === null || pratos.length === 0) {
        return null;
    }

    for (const pratoExistente of pratos) {
        if(pratoExistente.id === id) {
            return pratoExistente;
        }
    }

    return null;
}

export {
    criarPrato,
    buscarPratos,
    atualizarPrato,
    excluirPrato,
    buscarPratosPorRestaurante,
    buscarPratoPorId,
    buscarPratosPorNome
}