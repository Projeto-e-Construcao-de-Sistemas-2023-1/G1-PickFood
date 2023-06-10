package br.pickfood.repository.favoritos;

import java.util.List;

import br.pickfood.model.favoritos.FavoritosItem;
import br.pickfood.repository.IBaseRepository;

public interface IFavoritosItemRepository extends IBaseRepository<FavoritosItem>{
	
	List<FavoritosItem> findByCliente_Id(Integer clienteId);
	void deleteByCliente_IdAndItem_Id(Integer clienteId, Integer itemId);
}
