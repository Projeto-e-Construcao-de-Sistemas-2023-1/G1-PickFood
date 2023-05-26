package br.pickfood.view.controller;

import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.item.Item;
import br.pickfood.service.item.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/item", produces = MediaType.APPLICATION_JSON_VALUE)

public class ItemController {

    @Autowired
    ItemService service;

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> verItem(){

        List<ItemDTO> dto = service.listAll();

        return ResponseEntity.ok(dto);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> cadastrarItem(@RequestBody ItemDTO dto){
        Item entity = dto.convertToEntity();
        return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(201));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Object> alterarItem(@RequestBody ItemDTO dto){
        Item entity = dto.convertToEntity();
        return new ResponseEntity(service.create(entity), HttpStatusCode.valueOf(201));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Object> apagarItem(@PathVariable Integer id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
