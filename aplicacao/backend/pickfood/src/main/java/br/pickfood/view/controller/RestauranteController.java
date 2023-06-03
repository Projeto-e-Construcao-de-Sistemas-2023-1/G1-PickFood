package br.pickfood.view.controller;

import java.util.HashSet;
import java.util.Set;

import br.pickfood.model.dto.user.UserDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import br.pickfood.groups.ICreation;
import br.pickfood.groups.IUpdate;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.service.restaurante.RestauranteService;

@RestController
@RequestMapping("/restaurante")
public class RestauranteController {
	
	@Autowired
	private RestauranteService service;

    @Autowired
    PasswordEncoder encoder;

    @PostMapping
    public ResponseEntity<RestauranteDTO> cadastrar(@RequestBody @Validated(ICreation.class)
    	RestauranteDTO dto){
    	UserDTO user = dto.getUser();
        user.setSenha(encoder.encode(user.getSenha()));
    	Restaurante entity = dto.convertToEntity();
    	
    	return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(201));
    }
    
    @PutMapping
    public ResponseEntity<RestauranteDTO> update(@RequestBody @Validated(IUpdate.class)
    		RestauranteDTO dto){
    	
    	return new ResponseEntity(service.update(dto), HttpStatusCode.valueOf(200));
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
    
    public static void copyNonNullProperties(Object src, Object target) {
        BeanUtils.copyProperties(src, target, getNullPropertyNames(src));
    }
    
    public static String[] getNullPropertyNames (Object source) {
        final BeanWrapper src = new BeanWrapperImpl(source);
        java.beans.PropertyDescriptor[] pds = src.getPropertyDescriptors();

        Set<String> emptyNames = new HashSet<String>();
        for(java.beans.PropertyDescriptor pd : pds) {
            Object srcValue = src.getPropertyValue(pd.getName());
            if (srcValue == null) emptyNames.add(pd.getName());
        }
        String[] result = new String[emptyNames.size()];
        return emptyNames.toArray(result);
    }
}
