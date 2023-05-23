package br.pickfood.model.user;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class User extends BaseEntity{
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "senha")
	private String senha;
	
	@OneToOne(mappedBy = "user")
	private Restaurante restaurante;
	
	@Override
	public UserDTO convertToDto() {
		return UserDTO.builder()
				.email(this.email)
				.senha(this.senha)
				.build();
	}

}
