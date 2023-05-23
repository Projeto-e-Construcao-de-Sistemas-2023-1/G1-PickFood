package br.pickfood.view.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.model.user.User;
import br.pickfood.service.restaurante.RestauranteService;

@RestController
@RequestMapping("/restaurante")
public class RestauranteController {
	
	@Autowired
	private RestauranteService service;

    @PostMapping
    public ResponseEntity<Object> cadastrar(@RequestBody RestauranteDTO dto){
    	
    	Restaurante entity = dto.convertToEntity();
    	
    	return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(200));
    }

}
