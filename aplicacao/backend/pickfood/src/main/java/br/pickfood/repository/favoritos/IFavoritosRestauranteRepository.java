package br.pickfood.repository.favoritos;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.pickfood.model.favoritos.FavoritosRestaurante;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IFavoritosRestauranteRepository extends IBaseRepository<FavoritosRestaurante>{
	
	List<FavoritosRestaurante> findByCliente_Id(Integer clienteId);
	void deleteByCliente_IdAndRestaurante_Id(Integer clienteId, Integer restauranteId);
}
