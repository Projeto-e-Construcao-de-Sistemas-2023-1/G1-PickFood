package br.pickfood.view.controller;

import br.pickfood.model.dto.restaurante.RestauranteDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/restaurante")
public class RestauranteController {


    @PostMapping("/cadastrar")
    public void cadastrar(@RequestBody RestauranteDTO dados){

    }

}
