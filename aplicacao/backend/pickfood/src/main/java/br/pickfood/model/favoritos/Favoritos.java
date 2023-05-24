package br.pickfood.model.favoritos;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.persistence.Column;
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
@Table(name = "favorito")
public class Favoritos extends BaseEntity{
	
	@Column(name = "cliente")
	private Cliente cliente;
	
	@Column(name = "restaurante")
	private Restaurante restaurante;
	
	@Override
	public <D> D convertToDto() {
		// TODO Auto-generated method stub
		return null;
	}

}
