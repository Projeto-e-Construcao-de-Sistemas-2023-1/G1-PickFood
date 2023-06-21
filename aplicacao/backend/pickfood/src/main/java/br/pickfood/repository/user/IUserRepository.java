package br.pickfood.repository.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import br.pickfood.model.user.User;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IUserRepository extends IBaseRepository<User>{

	@Query("select u from User u where u.email = ?1 and u.senha = ?2")
    User findByEmailAndSenha(String email, String senha);
	
    UserDetails findByemail(String email);
}
