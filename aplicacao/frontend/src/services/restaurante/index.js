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
}) => {
    const restaurantes = buscarTodosRestaurantes();
    let restaurantesBuscados = [];

    if (restaurantes === null) {
        return [];
    }

    for (const restaurante of restaurantes) {
        
        if (restaurante.nome_fantasia.includes(nome)) {
        
            restaurantesBuscados.push(restaurante);
        }
    }

    return restaurantesBuscados;
}

export {
    criarRestaurante,
    buscarRestaurantePorEmail,
    buscarRestaurantePorId,
    atualizarRestaurante,
    excluirRestaurante,
    buscarTodosRestaurantes,
    buscarRestaurantes
}