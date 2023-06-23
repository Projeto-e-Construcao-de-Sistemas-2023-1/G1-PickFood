import { v4 as uuid } from "uuid";
import { buscarRestaurantePorId } from "../restaurante";

const criarFavorito = ({ idCliente, idRestaurante }) => {

    const favoritos = buscarTodosFavoritos();

    const favorito = {
        id: uuid(),
        idCliente,
        idRestaurante
    };

    if (favoritos === null || favoritos.length === 0) {
        localStorage.setItem("favoritos", JSON.stringify([ favorito ]));

        return favorito;
    }

    favoritos.push(favorito);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));

    return favorito;
}

const excluirFavoritoPorClienteERestaurante = ({ idCliente, idRestaurante }) => {
    let favoritos = buscarTodosFavoritos();
    let indice;

    for (const i in favoritos) {

        if (favoritos[i].idCliente === idCliente && favoritos[i].idRestaurante === idRestaurante) {
            indice = i;
        }
    }

    favoritos.splice(indice, 1);

    localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

const buscarTodosFavoritos = () => {
    return JSON.parse(localStorage.getItem("favoritos"));
}

const buscarRestaurantesFavoritosPorCliente = (idCliente) => {

    const favoritos = buscarTodosFavoritos();
    let favoritosCliente = [];

    for (const favorito of favoritos) {
        if (favorito.idCliente === idCliente) {
            favoritosCliente.push(favorito);
        }
    }

    const restaurantesFavoritosCliente = [];

    for (const favoritoCliente of favoritosCliente) {
        const restauranteFavorito = buscarRestaurantePorId(favoritoCliente.idRestaurante);
        restaurantesFavoritosCliente.push(restauranteFavorito);
    }

    return restaurantesFavoritosCliente;
}

export {
    criarFavorito,
    excluirFavoritoPorClienteERestaurante,
    buscarTodosFavoritos,
    buscarRestaurantesFavoritosPorCliente
}