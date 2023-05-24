package br.pickfood.service.restaurante;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.restaurante.IRestauranteRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class RestauranteService extends BaseServiceImpl<RestauranteDTO, Restaurante, IRestauranteRepository> {

	public List<RestauranteDTO> listByName(String name) {
		return baseRepository.findByNomeFantasiaContains(name).stream().map(Restaurante::convertToDto).collect(Collectors.toList());
	}
	public List<RestauranteDTO> listAll(){
		return baseRepository.findAll().stream().map(Restaurante::convertToDto).collect(Collectors.toList());
	}
}
