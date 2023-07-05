import { v4 as uuid } from "uuid";

const criarClienteCupom = (idCliente, idCupom) => {
    const clientesCupons = buscarTodosClientesCupons();

    const clienteCupom = {
        id: uuid(),
        idCliente,
        idCupom
    };

    if (clientesCupons.length === 0) {
        localStorage.setItem("cliente_cupom", JSON.stringify([ clienteCupom ]));

        return clienteCupom;
    }

    clientesCupons.push(clienteCupom);

    localStorage.setItem("cliente_cupom", JSON.stringify(clientesCupons));

    return clienteCupom;
}

const buscarTodosClientesCupons = () => {
    
    const clientesCupons = JSON.parse(localStorage.getItem("cliente_cupom"));

    if (clientesCupons === null || clientesCupons === undefined) {
        return [];
    }
    
    return clientesCupons;
}

const buscarCuponsClientesPorCliente = (idCliente) => {

    const clientesCupons = buscarTodosClientesCupons();

    let clientesCuponsCliente = [];

    for (const clienteCupom of clientesCupons) {
        if (clienteCupom.idCliente === idCliente) {
            clientesCuponsCliente.push(clienteCupom);
        }
    }


    return clientesCuponsCliente;
}

export {
    criarClienteCupom,
    buscarTodosClientesCupons,
    buscarCuponsClientesPorCliente
}