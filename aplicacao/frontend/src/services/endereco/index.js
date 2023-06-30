import { v4 as uuid } from 'uuid';

const criarEndereco = ({
    idCliente,
    apelido,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    complemento,
    numero
}) => {

    const endereco = {
        id: uuid(),
        idCliente,
        apelido,
        cep,
        rua,
        bairro,
        cidade,
        estado,
        complemento,
        numero
    };

    console.log(endereco);

    let enderecos = buscarEnderecos();

    if (enderecos === null || enderecos.length === 0) {
        localStorage.setItem("enderecos", JSON.stringify([ endereco ]));

        return endereco;
    }

    enderecos.push(endereco);

    localStorage.setItem("enderecos", JSON.stringify(enderecos));

    return endereco;
}

const buscarEnderecosPorCliente = (id) => {

    const enderecos = buscarEnderecos();
    let enderecosCliente = [];

    for (const endereco of enderecos) {
        if (endereco.idCliente === id) {
            enderecosCliente.push(endereco);
        }
    }

    return enderecosCliente;
}

const buscarEnderecoPorId = (id) => {

    const enderecos = buscarEnderecos();

    if (enderecos === null || enderecos.length === 0) {
        return null;
    }

    for (const enderecoExistente of enderecos) {
        if(enderecoExistente.id === id) {
            return enderecoExistente;
        }
    }

    return null;
}

const atualizarEndereco = (id, {
    apelido,
    cep,
    rua,
    bairro,
    cidade,
    estado,
    complemento,
    numero
}) => {

    let enderecos = buscarEnderecos();
    let indice;

    for (const i in enderecos) {

        if (enderecos[i].id === id) {
            indice = i;
        }
    }

    enderecos[indice] = {
        ...enderecos[indice],
        apelido,
        cep,
        rua,
        bairro,
        cidade,
        estado,
        complemento,
        numero
    }

    localStorage.setItem("enderecos", JSON.stringify(enderecos));
}

const excluirEndereco = (id) => {
    let enderecos = buscarEnderecos();
    let indice;

    for (const i in enderecos) {

        if (enderecos[i].id === id) {
            indice = i;
        }
    }

    enderecos.splice(indice, 1);

    localStorage.setItem("enderecos", JSON.stringify(enderecos));
}

const buscarEnderecos = () => {
    const enderecos = JSON.parse(localStorage.getItem("enderecos"));

    if (enderecos === null || enderecos === undefined) {
        return [];
    }

    return enderecos;
}

export {
    criarEndereco,
    buscarEnderecos,
    buscarEnderecoPorId,
    atualizarEndereco,
    excluirEndereco,
    buscarEnderecosPorCliente
}