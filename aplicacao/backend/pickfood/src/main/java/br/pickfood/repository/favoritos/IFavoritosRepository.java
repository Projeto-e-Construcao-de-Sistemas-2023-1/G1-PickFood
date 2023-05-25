package br.pickfood.repository.favoritos;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IFavoritosRepository extends IBaseRepository<Favoritos>{
	
	List<Favoritos> findByCliente_Id(Integer clienteId);
	void deleteByCliente_IdAndRestaurante_Id(Integer clienteId, Integer restauranteId);
}
