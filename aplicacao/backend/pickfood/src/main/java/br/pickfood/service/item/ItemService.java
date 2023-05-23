package br.pickfood.service.item;

import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.model.item.Item;
import br.pickfood.repository.endereco.IEnderecoRepository;
import br.pickfood.repository.item.IItemRepository;
import br.pickfood.service.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ItemService extends BaseServiceImpl<ItemDTO, Item, IItemRepository> {
}
