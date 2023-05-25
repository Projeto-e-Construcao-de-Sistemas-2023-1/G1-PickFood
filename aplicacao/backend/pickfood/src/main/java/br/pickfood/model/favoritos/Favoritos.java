package br.pickfood.model.favoritos;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.favoritos.FavoritosDTO;
import br.pickfood.model.restaurante.Restaurante;
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
@Table(name = "favoritos")
public class Favoritos extends BaseEntity{

    @ManyToOne
	@JoinColumn(name = "cliente")
	private Cliente cliente;
    
    @ManyToOne
    @JoinColumn(name = "restaurante")
	private Restaurante restaurante;
	
	@Override
	public FavoritosDTO convertToDto() {
		return FavoritosDTO.builder()
				.id(this.id)
				.clienteId(this.cliente.getId())
				.restauranteId(this.restaurante.getId())
				.build();
	}

}
