package br.pickfood.model.user;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.user.UserDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class User extends BaseEntity{
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "senha")
	private String senha;
	
	@Override
	public UserDTO convertToDto() {
		return UserDTO.builder()
				.email(this.email)
				.senha(this.senha)
				.build();
	}

}
