package br.pickfood.model.dto.favoritos;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.model.restaurante.Restaurante;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FavoritosDTO extends BaseDTO<Favoritos>{
	
	private Integer id;
	
	private Integer clienteId;
	
	private Integer restauranteId;
	
	@Override
	public Favoritos convertToEntity() {
		return Favoritos.builder()
				.cliente(Cliente.builder().id(clienteId).build())
				.restaurante(Restaurante.builder().id(restauranteId).build())
				.build();
	}

}
