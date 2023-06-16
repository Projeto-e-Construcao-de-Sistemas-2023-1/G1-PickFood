import { v4 as uuid } from "uuid";
import { buscarPedidosPorCliente } from "../pedido";

const criarCliente = ({
    nome,
    email,
    senha,
    cpf,
    telefone
}) => {

    let clientes = buscarClientes();

    const cliente = {
        id: uuid(),
        nome,
        email,
        senha,
        cpf,
        telefone
    };

    if (clientes === null || clientes.length === 0) {
        localStorage.setItem("clientes", JSON.stringify([ cliente ]));

        return cliente;
    }

    for (const clienteExistente of clientes) {
        if (clienteExistente.cpf === cliente.cpf || clienteExistente.email === cliente.email) {
            throw Error("Usuário já cadastrado.");
        }
    }

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    return cliente;
}

const buscarClientes = () => {
    return JSON.parse(localStorage.getItem("clientes"));
}

const buscarClientePorEmail = (email) => {

    const clientes = buscarClientes();

    if (clientes === null || clientes.length === 0) {
        return null;
    }

    for (const clienteExiste of clientes) {
        if(clienteExiste.email === email) {
            return clienteExiste;
        }
    }

    return null;
}

const buscarClientePorId = (id) => {
    const clientes = buscarClientes();

    if (clientes === null || clientes.length === 0) {
        return null;
    }

    for (const clienteExiste of clientes) {
        if(clienteExiste.id === id) {
            return clienteExiste;
        }
    }

    return null;
}

const atualizarCliente = (id, {
    nome,
    email,
    telefone,
    cpf,
}) => {

    let clientes = buscarClientes();
    let indice;

    for (const i in clientes) {

        if (clientes[i].id === id) {
            indice = i;
        }
    }

    clientes[indice] = {
        ...clientes[indice],
        nome,
        email,
        telefone,
        cpf
    }

    localStorage.setItem("clientes", JSON.stringify(clientes));
}

const excluirCliente = (id) => {

    let clientes = buscarClientes();
    let indice;
    
    for (const i in clientes) {

        if (clientes[i].id === id) {
            indice = i;
        }
    }

    clientes.splice(indice, 1);

    localStorage.setItem("clientes", JSON.stringify(clientes));
}

export {
    criarCliente,
    buscarClientePorEmail,
    buscarClientePorId,
    atualizarCliente,
    excluirCliente
}
