package br.pickfood.model.item.pedido;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.item.Item;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "favoritos")
public class ItemPedido extends BaseEntity{
	
	private Integer quantidade;
	
	private Double valor;
	
	@ManyToOne
    @JoinColumn(name = "item")
	private Item item;

	@Override
	public <D> D convertToDto() {
		// TODO Auto-generated method stub
		return null;
	}
}
