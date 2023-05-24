package br.pickfood.service.favoritos;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.favoritos.FavoritosDTO;
import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.repository.favoritos.IFavoritosRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class FavoritosService extends BaseServiceImpl<FavoritosDTO, Favoritos, IFavoritosRepository>
	implements IFavoritosService{

}
