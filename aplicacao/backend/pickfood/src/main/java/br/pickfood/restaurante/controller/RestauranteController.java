package br.pickfood.restaurante.controller;

import br.pickfood.restaurante.dto.DadosRestauranteDTO;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/restaurante")
public class RestauranteController {


    @PostMapping("/cadastrar")
    public void cadastrar(@RequestBody DadosRestauranteDTO dados){

    }

}
