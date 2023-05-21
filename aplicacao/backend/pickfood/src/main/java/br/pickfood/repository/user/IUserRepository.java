package br.pickfood.repository.user;

import org.springframework.stereotype.Repository;

import br.pickfood.model.user.User;
import br.pickfood.repository.IBaseRepository;

@Repository
public interface IUserRepository extends IBaseRepository<User>{

}
