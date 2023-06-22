package br.pickfood.model.dto.user;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDTO extends BaseDTO<User>{
	
	private Integer id;
	
	private Integer idRestaurante;
	
	private Integer idCliente;
	
	private String email;

	private String senha;

	private String type;
	
	@Override
	public User convertToEntity() {
		return User.builder()
				.email(this.email)
				.senha(this.senha)
				.build();
	}


}
