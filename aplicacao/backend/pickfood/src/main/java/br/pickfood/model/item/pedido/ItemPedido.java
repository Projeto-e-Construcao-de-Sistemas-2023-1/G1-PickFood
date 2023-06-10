package br.pickfood.model.item.pedido;

import jakarta.persistence.Entity;
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
public class ItemPedido {
	
	private Integer quantidade;
	
	private Double valor;
}
