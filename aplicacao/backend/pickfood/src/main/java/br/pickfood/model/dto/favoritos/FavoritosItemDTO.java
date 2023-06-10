package br.pickfood.model.dto.favoritos;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.favoritos.FavoritosItem;
import br.pickfood.model.item.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class FavoritosItemDTO extends BaseDTO<FavoritosItem>{
	
	private Integer id;
	
	private Integer clienteId;
	
	private Integer itemId;
	
	@Override
	public FavoritosItem convertToEntity() {
		return FavoritosItem.builder()
				.cliente(Cliente.builder().id(clienteId).build())
				.item(Item.builder().id(itemId).build())
				.build();
	}
}
