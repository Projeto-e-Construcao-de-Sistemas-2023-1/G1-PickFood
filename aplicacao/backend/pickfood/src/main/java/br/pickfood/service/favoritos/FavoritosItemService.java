package br.pickfood.service.favoritos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.pickfood.model.dto.favoritos.FavoritosItemDTO;
import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.favoritos.FavoritosItem;
import br.pickfood.model.item.Item;
import br.pickfood.repository.favoritos.IFavoritosItemRepository;
import br.pickfood.service.BaseServiceImpl;
import br.pickfood.service.item.ItemService;
import jakarta.transaction.Transactional;

@Service
public class FavoritosItemService extends BaseServiceImpl<FavoritosItemDTO, FavoritosItem, IFavoritosItemRepository>
	implements IFavoritosItemService{
	
	@Autowired
	ItemService itemService;
	
	public List<ItemDTO> listItemsFavoritosByClient(Integer clientId){
		List<Item> favoritosList = baseRepository.findByCliente_Id(clientId).stream().map(FavoritosItem::getItem).collect(Collectors.toList());
		return favoritosList.stream().map(Item::convertToDto).collect(Collectors.toList());
	}
	
	@Transactional
	public void deleteByClienteIdAndItemId(FavoritosItemDTO dto) {
		baseRepository.deleteByCliente_IdAndItem_Id(dto.getClienteId(), dto.getItemId());
	}
	
	public ItemDTO createAndReturnItem(FavoritosItem newEntity) {
		return itemService.findById(baseRepository.save(newEntity).getItem().getId());
	}
}
