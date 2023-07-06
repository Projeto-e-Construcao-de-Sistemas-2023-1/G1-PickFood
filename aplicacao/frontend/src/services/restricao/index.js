import { v4 as uuid } from "uuid";

const criarRestricao = ({ nome }) => {

    const restricoes = buscarTodasRestricoes();

    const restricao = {
        id: uuid(),
        nome
    }

    restricoes.push(restricao);

    localStorage.setItem("restricoes", JSON.stringify(restricoes));

    return restricao;
}

const buscarTodasRestricoes = () => {
    const restricoes = JSON.parse(localStorage.getItem("restricoes"));

    if (restricoes === null || restricoes === undefined) {
        return [];
    }

    return restricoes;
}

const buscarRestricaoPorNome = (nome) => {

    const restricoes = buscarTodasRestricoes();

    console.log(nome);

    for (const restricao of restricoes) {

        console.log(restricao.nome);

        if(restricao.nome === nome) {
            return restricao;
        }
    }

    return null;
}

const buscarRestricaoPorId = (id) => {

    const restricoes = buscarTodasRestricoes();

    for (const restricao of restricoes) {
        if (restricao.id === id) {
            return restricao;
        }
    }

    return null;
}

export {
    criarRestricao,
    buscarTodasRestricoes,
    buscarRestricaoPorNome,
    buscarRestricaoPorId
}