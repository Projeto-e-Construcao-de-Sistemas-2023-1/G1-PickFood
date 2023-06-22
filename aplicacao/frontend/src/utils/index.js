const calcularValorTotalItens = (itens) => {
    let total = 0;

    if (itens === null || itens === undefined) {
        return 0
    }

    for (const item of itens) {
        total += Number.parseFloat(item.valor);
    }

    return total;
}

export {
    calcularValorTotalItens
}