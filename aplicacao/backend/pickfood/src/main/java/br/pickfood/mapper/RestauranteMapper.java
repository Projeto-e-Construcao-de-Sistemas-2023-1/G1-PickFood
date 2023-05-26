package br.pickfood.mapper;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;

@Mapper(componentModel = "spring")
public interface RestauranteMapper {
	@BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
	@Mapping(target = "endereco", source = "endereco")
	@Mapping(target = "user", source = "user")
	void updateRestauranteFromDto(RestauranteDTO dto, @MappingTarget Restaurante entity);
}
