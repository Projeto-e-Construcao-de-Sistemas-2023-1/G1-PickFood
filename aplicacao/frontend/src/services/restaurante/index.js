import { v4 as uuid } from "uuid";

const criarRestaurante = ({
    email,
    senha,
    nome_fantasia,
    cnpj,
    razao_social,
    taxaEntrega,
    telefone,
    horarioAbertura,
    horarioFechamento,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    complemento,
    numero
}) => {

    const restaurantes = buscarTodosRestaurantes();

    const restaurante = {
        id: uuid(),
        email,
        senha,
        nome_fantasia,
        cnpj,
        razao_social,
        taxaEntrega,
        telefone,
        horarioAbertura,
        horarioFechamento,
        endereco: {
            cep,
            rua,
            bairro,
            cidade,
            estado,
            complemento,
            numero
        }
    };

    if (restaurantes === null || restaurantes.length === 0) {
        localStorage.setItem("restaurantes", JSON.stringify([ restaurante ]));

        return restaurante;
    }

    for (const restauranteExistente of restaurantes) {
        if (restauranteExistente.cnpj === cnpj) {
            throw Error("Usuário já cadastrado");
        }
    }

    restaurantes.push(restaurante);

    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));

    return restaurante;

}

const buscarRestaurantePorEmail = (email) => {

    const restaurantes = buscarTodosRestaurantes();

    if (restaurantes === null || restaurantes.length === 0) {
        return null;
    }

    for (const restauranteExistente of restaurantes) {
        if(restauranteExistente.email === email) {
            return restauranteExistente;
        }
    }

    return null;
}

const buscarRestaurantePorId = (id) => {

    const restaurantes = buscarTodosRestaurantes();

    if (restaurantes === null || restaurantes.length === 0) {
        return null;
    }

    for (const restauranteExistente of restaurantes) {
        if(restauranteExistente.id === id) {
            return restauranteExistente;
        }
    }

    return null;
}

const buscarTodosRestaurantes = () => {
    return JSON.parse(localStorage.getItem("restaurantes"));
}

const atualizarRestaurante = (id, {
    email,
    nomeFantasia,
    razaoSocial,
    taxaEntrega,
    telefone,
    horarioAbertura,
    horarioFechamento,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    complemento,
    numero
}) => {

    let restaurantes = buscarTodosRestaurantes();
    let indice;

    for (const i in restaurantes) {

        if (restaurantes[i].id === id) {
            indice = i;
        }
    }

    restaurantes[indice] = {
        ...restaurantes[indice],
        email,
        nome_fantasia: nomeFantasia,
        razao_social: razaoSocial,
        taxaEntrega,
        telefone,
        horarioAbertura,
        horarioFechamento,
        endereco: {
            cep,
            rua,
            bairro,
            cidade,
            estado,
            complemento,
            numero
        }
    }

    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));
}

const excluirRestaurante = (id) => {
    let restaurantes = buscarTodosRestaurantes();
    let indice;

    for (const i in restaurantes) {

        if (restaurantes[i].id === id) {
            indice = i;
        }
    }

    restaurantes.splice(indice, 1);

    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));
}

const buscarRestaurantes = ({
    nome
}, ordenacao) => {


    const restaurantes = buscarTodosRestaurantes();
    let restaurantesBuscados = [];

    if (restaurantes === null) {
        return [];
    }

    for (const restaurante of restaurantes) {
        
        if (restaurante.nome_fantasia.toLowerCase().includes(nome.toLowerCase())) {
        
            restaurantesBuscados.push(restaurante);
        }
    }

    restaurantesBuscados.sort((a, b) => {

        return ordenar(a, b, ordenacao);
    });

    return restaurantesBuscados;
}

const ordenar = (a, b, criterio) => {

    switch (criterio) {
        case 0:
            if (a.nome_fantasia < b.nome_fantasia) return -1;
            if (a.nome_fantasia > b.nome_fantasia) return 1;
            return 0;
            
        case 1:
            if (a.nome_fantasia < b.nome_fantasia) return 1;
            if (a.nome_fantasia > b.nome_fantasia) return -1;
            return 0;
    }
}

const redefinirSenhaRestaurante = (id, novaSenha) => {
    let restaurantes = buscarTodosRestaurantes();
    let indice;

    for (const i in restaurantes) {

        if (restaurantes[i].id === id) {
            indice = i;
        }
    }

    restaurantes[indice] = {
        ...restaurantes[indice],
        senha: novaSenha
    }

    localStorage.setItem("restaurantes", JSON.stringify(restaurantes));
}

export {
    criarRestaurante,
    buscarRestaurantePorEmail,
    buscarRestaurantePorId,
    atualizarRestaurante,
    excluirRestaurante,
    buscarTodosRestaurantes,
    buscarRestaurantes,
    redefinirSenhaRestaurante
}