import { v4 as uuid } from "uuid";

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
            throw Error("Cliente já cadastrado.");
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

    for (const clienteExiste of clientes) {
        if(clienteExiste.email === email) {
            return clienteExiste;
        }
    }

    throw Error("Cliente não cadastrado.");
}

export {
    criarCliente,
    buscarClientePorEmail
}
