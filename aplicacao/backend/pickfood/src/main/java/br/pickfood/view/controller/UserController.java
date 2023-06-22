package br.pickfood.view.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import br.pickfood.service.user.UserService;

@RestController
@RequestMapping("/user")
@Transactional
public class UserController {

	@Autowired
	PasswordEncoder pwdEncoder;
	@Autowired
	UserService service;


	@PostMapping("/login")
	@Transactional
	public ResponseEntity<UserDTO> login(@RequestBody UserDTO dto) {
		//dto.setSenha(pwdEncoder.encode(dto.getSenha()));
		User entity = dto.convertToEntity();
		return ResponseEntity.ok(service.login(entity).convertToDto());
	}
}