package br.pickfood.service.user;

import org.springframework.stereotype.Service;

import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import br.pickfood.repository.user.IUserRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class UserService extends BaseServiceImpl<UserDTO, User, IUserRepository>{
	
	public User login(User user) {
		return baseRepository.findByEmailAndSenha(user.getEmail(), user.getSenha());
	}
}
