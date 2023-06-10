package br.pickfood.model.dto.favoritos;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.favoritos.FavoritosPrato;
import br.pickfood.model.item.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FavoritosPratoDTO extends BaseDTO<FavoritosPrato>{
	
	private Integer id;
	
	private Integer clienteId;
	
	private Integer itemId;
	
	@Override
	public FavoritosPrato convertToEntity() {
		return FavoritosPrato.builder()
				.cliente(Cliente.builder().id(clienteId).build())
				.item(Item.builder().id(itemId).build())
				.build();
	}
}
