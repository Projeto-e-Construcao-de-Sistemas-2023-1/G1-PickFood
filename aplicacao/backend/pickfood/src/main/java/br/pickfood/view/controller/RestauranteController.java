package br.pickfood.view.controller;

import br.pickfood.model.dto.item.ItemDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.groups.ICreation;
import br.pickfood.groups.IUpdate;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.service.restaurante.RestauranteService;

import java.util.List;

@RestController
@RequestMapping("/restaurante")
public class RestauranteController {
	
	@Autowired
	private RestauranteService service;

    @PostMapping
    public ResponseEntity<RestauranteDTO> cadastrar(@RequestBody @Validated(ICreation.class)
    	RestauranteDTO dto){
    	
    	Restaurante entity = dto.convertToEntity();
    	
    	return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(201));
    }
    
    @PutMapping
    public ResponseEntity<RestauranteDTO> update(@RequestBody @Validated(IUpdate.class)
    		RestauranteDTO dto){
    	
    	Restaurante entity = dto.convertToEntity();
    	
    	return new ResponseEntity(service.update(entity), HttpStatusCode.valueOf(200));
    }
    
    @GetMapping(path = "/list/{name}")
    public ResponseEntity<RestauranteDTO> listByName(@PathVariable String name){

    	return new ResponseEntity(service.listByName(name), HttpStatusCode.valueOf(200));
    }
    
    @GetMapping(path = "/list")
    public ResponseEntity<RestauranteDTO> listAll(){
    	return new ResponseEntity(service.listAll(), HttpStatusCode.valueOf(200));
    }
    
    @GetMapping(path = "/{id}")
    public ResponseEntity<RestauranteDTO> findById(@PathVariable Integer id){
    	return new ResponseEntity(service.findById(id), HttpStatusCode.valueOf(200));
    }
    
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Object> delete(@PathVariable Integer id){
    	service.delete(id);
    	return new ResponseEntity(HttpStatusCode.valueOf(204));
    }
}
