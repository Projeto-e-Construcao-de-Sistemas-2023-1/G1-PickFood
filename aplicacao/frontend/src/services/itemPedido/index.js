import { v4 as uuid } from "uuid";

const criarItemPedido = ({
    idPedido,
    quantidade,
    valor,
    prato: {
        id,
        preco,
        nome,
        tipo,
        descricao,
        foto,
        idRestaurante,
    }
}) => {

    const itemPedido = {
        id: uuid(),
        idPedido,
        quantidade,
        valor,
        prato: {
            id,
            preco,
            nome,
            tipo,
            descricao,
            foto,
            idRestaurante
        }
    }

    const itensPedido = buscarTodosItensPedido();

    if (itensPedido === null || itensPedido.length === 0) {
        localStorage.setItem("itens_pedido", JSON.stringify([ itemPedido ]));

        return itemPedido;
    }

    itensPedido.push(itemPedido);

    localStorage.setItem("itens_pedido", JSON.stringify(itensPedido));

    return itemPedido;
}

const buscarTodosItensPedido = () => {

    const itensPedido = JSON.parse(localStorage.getItem("itens_pedido"));

    if (itensPedido === null || itensPedido === undefined) {
        return []
    }

    return itensPedido;
}

const buscarItensPedidoPorPedido = (idPedido) => {

    const itensPedido = buscarTodosItensPedido();
    let itensPedidoPedido = [];

    for (const itemPedido of itensPedido) {
        if (itemPedido.idPedido === idPedido) {
            itensPedidoPedido.push(itemPedido);
        }
    }

    return itensPedidoPedido;
}

export {
    buscarTodosItensPedido,
    criarItemPedido,
    buscarItensPedidoPorPedido
}