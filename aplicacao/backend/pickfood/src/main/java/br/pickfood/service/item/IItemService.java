package br.pickfood.service.item;

import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.item.Item;
import br.pickfood.repository.IBaseRepository;
import br.pickfood.service.IBaseService;

public interface IItemService extends IBaseService<ItemDTO, Item> {
}
