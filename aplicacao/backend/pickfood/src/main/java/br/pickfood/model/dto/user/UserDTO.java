package br.pickfood.model.dto.user;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.user.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class UserDTO extends BaseDTO<User>{
	
	private String email;
	
	private String senha;
	
	@Override
	public User convertToEntity() {
		return User.builder()
				.email(this.email)
				.senha(this.senha)
				.build();
	}

}
