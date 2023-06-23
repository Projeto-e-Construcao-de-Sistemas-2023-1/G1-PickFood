import { v4 as uuid } from "uuid";

const criarCupom = ({ titulo, valor, idRestaurante }) => {

    const cupom = {
        id: uuid(),
        titulo,
        valor: Number.parseFloat(valor),
        idRestaurante
    };

    console.log(cupom);

    let cupons = buscarTodosCupons();

    if (cupons === null || cupons.length === 0) {
        localStorage.setItem("cupons", JSON.stringify([ cupom ]));

        return cupom;
    }

    cupons.push(cupom);

    localStorage.setItem("cupons", JSON.stringify(cupons));

    return cupom;
}

const excluirCupom = (id) => {
    let cupons = buscarTodosCupons();
    let indice;

    for (const i in cupons) {

        if (cupons[i].id === id) {
            indice = i;
        }
    }

    cupons.splice(indice, 1);

    localStorage.setItem("cupons", JSON.stringify(cupons));
}

const buscarCupomPorId = (id) => {
    const cupons = buscarTodosCupons();

    if (cupons === null || cupons.length === 0) {
        return null;
    }

    for (const cuponsExistentes of cupons) {
        if(cuponsExistentes.id === id) {
            return cuponsExistentes;
        }
    }

    return null;
}

const buscarTodosCupons = () => {

    return JSON.parse(localStorage.getItem("cupons"));
}

const atualizarCupom = (id, { titulo, valor }) => {
    let cupons = buscarTodosCupons();
    let indice;

    for (const i in cupons) {

        if (cupons[i].id === id) {
            indice = i;
        }
    }

    cupons[indice] = {
        ...cupons[indice],
        titulo,
        valor
    }

    localStorage.setItem("cupons", JSON.stringify(cupons));
}

const buscarCuponsPorRestaurante = (idRestaurante) => {

    const cupons = buscarTodosCupons();
    let cuponsRestaurante = [];

    for (const cupom of cupons) {
        if (cupom.idRestaurante === idRestaurante) {
            cuponsRestaurante.push(cupom);
        }
    }

    return cuponsRestaurante;
}

export {
    buscarTodosCupons,
    criarCupom,
    excluirCupom,
    atualizarCupom,
    buscarCupomPorId,
    buscarCuponsPorRestaurante
}

