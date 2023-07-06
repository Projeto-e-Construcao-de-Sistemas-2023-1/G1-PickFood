import { v4 as uuid } from "uuid";
import { buscarPratosRestricoesPorPrato, criarPratoRestricao } from "../prato_restricao";
import { buscarRestricaoPorNome } from "../restricao";

const criarPrato = ({
    idRestaurante,
    nome,
    tipo,
    preco,
    descricao,
    restricoes,
    foto
}) => {

    console.log(restricoes);

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

    pratos.push(prato);

    for (const nomeRestricao of restricoes) {
        const restricao = buscarRestricaoPorNome(nomeRestricao);

        console.log(restricao);

        criarPratoRestricao({idPrato: prato.id, idRestricao: restricao.id});
    }

    localStorage.setItem("pratos", JSON.stringify(pratos));

    return prato;
}

const buscarPratos = () => {

    const pratos = JSON.parse(localStorage.getItem("pratos"));

    if (pratos === null || pratos === undefined) {
        return [];
    }

    return pratos;
}

const atualizarPrato = (id, {
    nome,
    tipo,
    preco,
    descricao,
    restricoes,
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
}, ordenacao, restricoes) => {
    const pratos = buscarPratos();
    let pratosBuscados = [];

    if (pratos === null) {
        return []
    }

    for (const prato of pratos) {
        
        if (prato.nome.toLowerCase().includes(nome.toLowerCase())) {
        
            pratosBuscados.push(prato);
        }
    }

    console.log("Filtrando por restriçao:");
    console.log(restricoes);
    console.log(pratosBuscados);

    if (restricoes.length !== 0) {
        for (let i in pratosBuscados) {
            console.log(pratosBuscados[i]);
    
            const restricoesPrato = buscarPratosRestricoesPorPrato(pratosBuscados[i].id);
    
            let encontrou = false;
    
            for (const restricaoPrato of restricoesPrato) {
                if (restricoes?.includes(restricaoPrato.nome)) {
                    console.log(restricaoPrato.nome)

                    console.log("encontrou restricao.");
                    encontrou = true;
                    break;
                }
            }
    
            if (!encontrou) {
                console.log("Nao encontrou a restricao");
                console.log(pratosBuscados);
                pratosBuscados.splice(i, 1);
            }
        }
    }



    pratosBuscados.sort((a, b) => {

        return ordenar(a, b, ordenacao);
    });

    return pratosBuscados;
}

const ordenar = (a, b, criterio) => {

    switch (criterio) {
        case 0:
            if (a.nome < b.nome) return -1;
            if (a.nome > b.nome) return 1;
            return 0;
            
        case 1:
            if (a.nome < b.nome) return 1;
            if (a.nome > b.nome) return -1;
            return 0;
        case 2:
            if (a.preco < b.preco) return -1;
            if (a.preco > b.preco) return 1;
            return 0;
        case 3:
            if (a.preco < b.preco) return 1;
            if (a.preco > b.preco) return -1;
            return 0;
    }
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