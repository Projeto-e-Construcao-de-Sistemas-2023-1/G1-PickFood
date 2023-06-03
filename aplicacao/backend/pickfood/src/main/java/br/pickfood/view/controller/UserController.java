package br.pickfood.view.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import br.pickfood.service.user.UserService;

@RestController
@RequestMapping("/user")
@Transactional
public class UserController {
	
	@Autowired
	UserService service;

	@Autowired
	PasswordEncoder encoder;

	@PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	public ResponseEntity<Object> insertUser(
			@RequestBody UserDTO dto){
		dto.setSenha(encoder.encode(dto.getSenha()));
		User entity = dto.convertToEntity();

		return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(200));
	}
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody UserDTO dto){


		User entity = dto.convertToEntity();
		return new ResponseEntity(service.iniciarSessao(entity), HttpStatusCode.valueOf(200));
	}
}
