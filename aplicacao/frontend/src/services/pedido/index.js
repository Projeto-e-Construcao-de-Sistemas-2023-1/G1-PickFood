import { v4 as uuid } from "uuid";
import { criarItemPedido } from "../itemPedido";

const criarPedido = ({
    idCliente,
    idRestaurante,
    itens,
    formaPagamento,
    totalPedido
}) => {

    const pedido = {
        codigo: uuid(),
        idCliente,
        status: 1,
        idRestaurante,
        formaPagamento,
        totalPedido
    };

    let pedidos = buscarTodosPedidos();

    for (const item of itens) {

        console.log(item);
        criarItemPedido({
            idPedido: pedido.codigo,
            quantidade: Number.parseFloat(item.quantidade),
            valor: Number.parseFloat(item.valor),
            prato: { ...item.prato }
        })
    }

    if (pedidos === null || pedidos.length === 0) {
        localStorage.setItem("pedidos", JSON.stringify([ pedido ]));

        return pedido;
    }

    pedidos.push(pedido);

    localStorage.setItem("pedidos", JSON.stringify(pedidos));

    

    return pedido;
}

const buscarTodosPedidos = () => {
    return JSON.parse(localStorage.getItem("pedidos"));
}

const buscarPedidosPorCliente = (idCliente) => {
    const pedidos = buscarTodosPedidos();
    let pedidosCliente = [];

    for (const pedido of pedidos) {

        if (pedido.idCliente === idCliente) {
            pedidosCliente.push(pedido);
        }
    }

    return pedidosCliente;
}

const buscarPedidosPorRestaurante = (idRestaurante) => {
    const pedidos = buscarTodosPedidos();
    let pedidosRestaurante = [];

    for (const pedido of pedidos) {

        if (pedido.idRestaurante === idRestaurante) {
            pedidosRestaurante.push(pedido);
        }
    }

    return pedidosRestaurante;
}

const buscarPedidoPorCodigo = (codigo) => {
    const pedidos = buscarTodosPedidos();

    if (pedidos === null || pedidos.length === 0) {
        return null;
    }

    for (const pedidoExistente of pedidos) {
        if(pedidoExistente.codigo === codigo) {
            return pedidoExistente;
        }
    }

    return null;
}

const cancelarPedido = (id) => {

    let pedidos = buscarTodosPedidos();
    let indice;

    for (const i in pedidos) {

        if (pedidos[i].id === id) {
            indice = i;
        }
    }

    pedidos[indice] = {
        ...pedidos[indice],
        status: 6
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

export {
    buscarTodosPedidos,
    criarPedido,
    buscarPedidosPorCliente,
    cancelarPedido,
    buscarPedidosPorRestaurante,
    buscarPedidoPorCodigo
}