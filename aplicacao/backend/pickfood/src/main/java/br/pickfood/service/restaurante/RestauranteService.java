package br.pickfood.service.restaurante;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.restaurante.IRestauranteRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class RestauranteService extends BaseServiceImpl<RestauranteDTO, Restaurante, IRestauranteRepository> {

}
