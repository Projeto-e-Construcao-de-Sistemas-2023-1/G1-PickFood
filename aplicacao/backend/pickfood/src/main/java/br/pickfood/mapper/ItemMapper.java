package br.pickfood.mapper;

import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.item.Item;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;


@Mapper(componentModel = "spring")
public interface ItemMapper {
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateRestauranteFromDto(ItemDTO dto, @MappingTarget Item entity);
}
