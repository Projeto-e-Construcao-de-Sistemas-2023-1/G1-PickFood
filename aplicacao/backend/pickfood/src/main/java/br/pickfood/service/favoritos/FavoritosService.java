package br.pickfood.service.favoritos;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.favoritos.FavoritosDTO;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.favoritos.IFavoritosRepository;
import br.pickfood.service.BaseServiceImpl;
import jakarta.transaction.Transactional;

@Service
public class FavoritosService extends BaseServiceImpl<FavoritosDTO, Favoritos, IFavoritosRepository>
	implements IFavoritosService{
	
	public List<RestauranteDTO> listRestaurantesFavoritosByClient(Integer clientId){
		List<Restaurante> favoritosList = baseRepository.findByCliente_Id(clientId).stream().map(Favoritos::getRestaurante).collect(Collectors.toList());
		return favoritosList.stream().map(Restaurante::convertToDto).collect(Collectors.toList());
	}
	
	@Transactional
	public void deleteByClienteIdAndRestauranteId(FavoritosDTO dto) {
		baseRepository.deleteByCliente_IdAndRestaurante_Id(dto.getClienteId(), dto.getRestauranteId());
	}
}
