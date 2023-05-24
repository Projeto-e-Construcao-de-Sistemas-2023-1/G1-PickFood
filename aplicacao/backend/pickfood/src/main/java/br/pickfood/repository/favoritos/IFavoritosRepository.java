package br.pickfood.repository.favoritos;

import org.springframework.stereotype.Repository;

import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IFavoritosRepository extends IBaseRepository<Favoritos>{

}
