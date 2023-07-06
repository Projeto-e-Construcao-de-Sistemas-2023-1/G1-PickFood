import { v4 as uuid } from "uuid";
import { buscarRestricaoPorId } from "../restricao";

const criarPratoRestricao = ({ idPrato, idRestricao }) => {

    const pratosRestricoes = buscarTodosPratoRestricao();

    const pratoRestricao = {
        id: uuid(),
        idPrato,
        idRestricao
    }

    pratosRestricoes.push(pratoRestricao);

    localStorage.setItem("pratos_restricoes", JSON.stringify(pratosRestricoes));
};

const buscarTodosPratoRestricao = () => {
    const pratosRestricoes = JSON.parse(localStorage.getItem("pratos_restricoes"));

    if (pratosRestricoes === null || pratosRestricoes === undefined) {
        return [];
    }

    return pratosRestricoes;
};

const buscarPratosRestricoesPorPrato = (idPrato) => {
    const pratosRestricoes = buscarTodosPratoRestricao();
    let restricoesPrato = [];


    for (const pratoRestricao of pratosRestricoes) {
        if (pratoRestricao.idPrato === idPrato) {
            restricoesPrato.push(pratoRestricao);
        }
    }

    const pratosRestricoesPrato = [];

    for (const restricaoPrato of restricoesPrato) {
        const restricao = buscarRestricaoPorId(restricaoPrato.idRestricao);
        pratosRestricoesPrato.push(restricao);
    }

    return pratosRestricoesPrato;
}

export {
    criarPratoRestricao,
    buscarTodosPratoRestricao,
    buscarPratosRestricoesPorPrato
}