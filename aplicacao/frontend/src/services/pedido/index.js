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

    if (pedidos === null) return;

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

    if (pedidos === null) return;


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

const cancelarPedido = (codigo) => {

    let pedidos = buscarTodosPedidos();
    let indice;

    for (const i in pedidos) {

        if (pedidos[i].codigo === codigo) {
            indice = i;
        }
    }

    console.log(pedidos[indice]);

    pedidos[indice] = {
        ...pedidos[indice],
        status: 6
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

const atualizarStatusPedido = (codigo) => {

    let pedidos = buscarTodosPedidos();
    let indice;

    for (const i in pedidos) {

        if (pedidos[i].codigo === codigo) {
            indice = i;
        }
    }

    const statusAtual = pedidos[indice].status;

    pedidos[indice] = {
        ...pedidos[indice],
        status: statusAtual + 1
    }

    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

export {
    buscarTodosPedidos,
    criarPedido,
    buscarPedidosPorCliente,
    cancelarPedido,
    buscarPedidosPorRestaurante,
    buscarPedidoPorCodigo,
    atualizarStatusPedido
}