import { v4 as uuid } from "uuid";
import { buscarPratoPorId } from "../prato";

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
    
    const favoritosPratoCliente = JSON.parse(localStorage.getItem("favoritos_prato_cliente"));

    if (favoritosPratoCliente === null || favoritosPratoCliente === undefined) {
        return [];
    }
    
    return favoritosPratoCliente;
}

const buscarPratosFavoritosPorCliente = (idCliente) => {

    const favoritos = buscarTodosFavoritosPratoCliente();
    let favoritosCliente = [];

    if (favoritos === null) {
        return;
    }

    for (const favorito of favoritos) {
        if (favorito.idCliente === idCliente) {
            favoritosCliente.push(favorito);
        }
    }

    const pratosFavoritosCliente = [];

    for (const favoritoCliente of favoritosCliente) {
        const pratoFavorito = buscarPratoPorId(favoritoCliente.idPrato);
        pratosFavoritosCliente.push(pratoFavorito);
    }

    return pratosFavoritosCliente;
}

export {
    criarFavoritoPratoClinete,
    buscarTodosFavoritosPratoCliente,
    excluirFavoritoPorClienteEPrato,
    buscarPratosFavoritosPorCliente
}