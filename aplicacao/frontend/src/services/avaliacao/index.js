import { v4 as uuid } from "uuid";

const criarAvaliacao = ({
    idCliente,
    idPedido,
    idRestaurante,
    nota
}) => {

    const avaliacoes = buscarTodasAvaliacoes();

    const avaliacao = {
        id: uuid(),
        nota,
        idRestaurante,
        idPedido,
        idCliente
    };

    if (avaliacoes.length === 0) {
        localStorage.setItem("avaliacoes", JSON.stringify([ avaliacao ]));

        return avaliacao;
    }

    avaliacoes.push(avaliacao);

    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

    return avaliacao;
}

const atualizarAvaliacao = (id, {
    nota
}) => {
    let avaliacoes = buscarTodasAvaliacoes();
    let indice;

    for (const i in avaliacoes) {

        if (avaliacoes[i].id === id) {
            indice = i;
        }
    }

    avaliacoes[indice] = {
        ...avaliacoes[indice],
        nota
    }

    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));

    return avaliacoes[indice];
}

const buscarTodasAvaliacoes = () => {

    const avaliacoes = JSON.parse(localStorage.getItem("avaliacoes"));

    if (avaliacoes === null || undefined) {
        return [];
    }

    return avaliacoes;
}

const buscarAvaliacaoPorPedido = (idPedido) => {
    const avaliacoes = buscarTodasAvaliacoes();

    for (const avaliacao of avaliacoes) {
        if (avaliacao.idPedido === idPedido) {

            return avaliacao;
        }
    }

    return null;
}

export {
    criarAvaliacao,
    buscarTodasAvaliacoes,
    buscarAvaliacaoPorPedido,
    atualizarAvaliacao
}