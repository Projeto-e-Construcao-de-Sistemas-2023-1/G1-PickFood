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

export {
    buscarTodosCupons,
    criarCupom,
    atualizarCupom
}

