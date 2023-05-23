package br.pickfood.repository.restaurante;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IRestauranteRepository extends IBaseRepository<Restaurante> {
	
	List<Restaurante> findByNomeFantasiaContains(String name);
}
