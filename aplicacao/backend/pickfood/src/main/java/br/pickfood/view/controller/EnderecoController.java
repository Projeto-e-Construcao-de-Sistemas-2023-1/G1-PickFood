package br.pickfood.view.controller;

import br.pickfood.model.endereco.Endereco;
import br.pickfood.service.endereco.EnderecoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/enderecos")
public class EnderecoController {


    private final EnderecoService enderecoService;

    @PostMapping("/cadastrar")
    public void cadastrarEndereco(@RequestBody Endereco endereco){
        enderecoService.create(endereco);
    }

    @DeleteMapping("/{id}")
    public void deletarEndereco(@PathVariable Integer id){
        enderecoService.delete(id);
    }

    @PutMapping("/{id}")
    public void alterarEndereco(@PathVariable Integer id, @RequestBody Endereco endereco){
        enderecoService.update(endereco);
    }


}
