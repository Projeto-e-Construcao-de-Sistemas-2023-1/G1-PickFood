package br.pickfood.view.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.groups.ICreation;
import br.pickfood.model.dto.favoritos.FavoritosDTO;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.favoritos.Favoritos;
import br.pickfood.service.favoritos.FavoritosService;

@RestController
@RequestMapping(name = "/favoritos")
public class FavoritosController {
	
	@Autowired
	FavoritosService service;
	
    @PostMapping
    public ResponseEntity<RestauranteDTO> cadastrar(@RequestBody @Validated(ICreation.class)
    	FavoritosDTO dto){
    	
    	Favoritos entity = dto.convertToEntity();
    	
    	return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(200));
    }
}
