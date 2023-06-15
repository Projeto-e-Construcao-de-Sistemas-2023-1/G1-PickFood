import { v4 as uuid } from "uuid";

const adicionarItem = (prato, setItens) => {

    let carrinho = pegarCarrinho();

    const itemCarrinho = {
        id: uuid(),
        quantidade: 1,
        valor: Number.parseInt(prato.preco),
        prato: {
            ...prato
        }
    }

    if (carrinho === null || carrinho.length === 0) {
        
        localStorage.setItem("carrinho", JSON.stringify([itemCarrinho]));
        setItens([
            itemCarrinho
        ]);

        return;
    }

    const item = buscarItemPorPrato(carrinho, prato.id)

    if (item === null) {
        carrinho.push(itemCarrinho);
    } else {

        item.quantidade += 1;
        item.valor += prato.preco
    }

    setItens(carrinho)
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

const pegarCarrinho = () => {
    return JSON.parse(localStorage.getItem("carrinho"));
}

const buscarItemPorPrato = (carrinho, idPrato) => {

    for (const indice in carrinho) {
        
        if (carrinho[indice].prato.id === idPrato) {

            return carrinho[indice];
        }
    }

    return null;
}

const limpar = () => {
    localStorage.setItem("carrinho", JSON.stringify([]));
}


export {
    adicionarItem,
    pegarCarrinho,
    limpar
}