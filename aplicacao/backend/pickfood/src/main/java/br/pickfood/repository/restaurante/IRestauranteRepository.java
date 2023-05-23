package br.pickfood.repository.restaurante;

import org.springframework.stereotype.Repository;

import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IRestauranteRepository extends IBaseRepository<Restaurante> {

}
