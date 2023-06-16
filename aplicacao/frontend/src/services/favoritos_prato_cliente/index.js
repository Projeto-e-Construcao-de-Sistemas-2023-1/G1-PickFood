import { v4 as uuid } from "uuid";

const criarFavoritoPratoClinete = ({ idCliente, idPrato }) => {

    const favoritos = buscarTodosFavoritosPratoCliente();

    const favorito = {
        id: uuid(),
        idCliente,
        idPrato
    };

    if (favoritos === null || favoritos.length === 0) {
        localStorage.setItem("favoritos_prato_cliente", JSON.stringify([ favorito ]));

        return favorito;
    }

    favoritos.push(favorito);

    localStorage.setItem("favoritos_prato_cliente", JSON.stringify(favoritos));

    return favorito;
}

const excluirFavoritoPorClienteEPrato = ({ idCliente, idPrato }) => {
    let favoritos = buscarTodosFavoritosPratoCliente();
    let indice;

    for (const i in favoritos) {

        if (favoritos[i].idCliente === idCliente && favoritos[i].idPrato === idPrato) {
            indice = i;
        }
    }

    favoritos.splice(indice, 1);

    localStorage.setItem("favoritos_prato_cliente", JSON.stringify(favoritos));
}

const buscarTodosFavoritosPratoCliente = () => {
    return JSON.parse(localStorage.getItem("favoritos_prato_cliente"));
}

export {
    criarFavoritoPratoClinete,
    buscarTodosFavoritosPratoCliente,
    excluirFavoritoPorClienteEPrato
}