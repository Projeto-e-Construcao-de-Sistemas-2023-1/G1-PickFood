package br.pickfood.service.item;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.item.Item;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.item.IItemRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class ItemService extends BaseServiceImpl<ItemDTO, Item, IItemRepository> {


    public List<ItemDTO> listAll(){
        return baseRepository.findAll().stream().map(Item::convertToDto).collect(Collectors.toList());
    }


    public List<ItemDTO> listByRestaurante(Restaurante restaurante) {
       return baseRepository.findItemByRestaurante(restaurante.getId()).stream().map(Item::convertToDto).collect(Collectors.toList());
    }
}
