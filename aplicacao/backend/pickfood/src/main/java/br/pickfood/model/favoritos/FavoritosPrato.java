package br.pickfood.model.favoritos;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.favoritos.FavoritosPratoDTO;
import br.pickfood.model.item.Item;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "favoritosprato")
public class FavoritosPrato extends BaseEntity{

    @ManyToOne
	@JoinColumn(name = "cliente")
	private Cliente cliente;
    
    @ManyToOne
    @JoinColumn(name = "item")
	private Item item;
	
	@Override
	public FavoritosPratoDTO convertToDto() {
		return FavoritosPratoDTO.builder()
				.id(this.id)
				.clienteId(this.cliente.getId())
				.itemId(this.item.getId())
				.build();
	}

}
