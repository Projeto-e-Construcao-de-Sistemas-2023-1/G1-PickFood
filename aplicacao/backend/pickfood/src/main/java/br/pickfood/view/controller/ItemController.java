package br.pickfood.view.controller;

import br.pickfood.model.dto.item.ItemDTO;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.item.Item;
import br.pickfood.service.item.ItemService;
import br.pickfood.service.restaurante.RestauranteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/item", produces = MediaType.APPLICATION_JSON_VALUE)
public class ItemController {

    @Autowired
    ItemService service;

    @Autowired
    RestauranteService restauranteService;

    @GetMapping("/restaurante/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<ItemDTO>> verItem(@PathVariable Integer id){
        RestauranteDTO restaurante = restauranteService.findById(id);

        List<ItemDTO> dto = service.listByRestaurante(restaurante.convertToEntity());

        return ResponseEntity.ok(dto);
    }

    @PostMapping("/restaurante/{id}")
    @Transactional
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ItemDTO> cadastrarItem(@PathVariable Integer id, @RequestBody ItemDTO dto){
        Item entity = dto.convertToEntity();

        service.create(entity);

        return new ResponseEntity(dto, HttpStatusCode.valueOf(201));
    }

    @PutMapping
    @Transactional
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> alterarItem(@RequestBody ItemDTO dto){
        Item entity = dto.convertToEntity();
        service.update(entity);
        return new ResponseEntity(dto, HttpStatusCode.valueOf(201));
    }

    @DeleteMapping("/{id}")
    @Transactional
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Object> apagarItem(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
