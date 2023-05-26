package br.pickfood.repository.user;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import br.pickfood.model.user.User;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IUserRepository extends IBaseRepository<User>{

	User findByEmailAndSenha(String email, String senha);
	
    UserDetails findByemail(String email);
}
