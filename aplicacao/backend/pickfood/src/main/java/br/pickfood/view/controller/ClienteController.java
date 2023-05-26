package br.pickfood.view.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.cliente.ClienteDTO;
import br.pickfood.service.cliente.ClienteService;

import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.service.endereco.EnderecoService;
@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    private EnderecoService enderecoService;

    @GetMapping
    public ResponseEntity<Object> getAllClientes() {
        List<ClienteDTO> clienteDTOList = clienteService.listarTodos();

       return clienteDTOList.isEmpty()? ResponseEntity.notFound().build() : ResponseEntity.ok(clienteDTOList);

    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteDTO> getClienteById(@PathVariable Integer id) {
        ClienteDTO clienteDTO = clienteService.findById(id);
        if (clienteDTO != null) {
            return ResponseEntity.ok(clienteDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }



    @PostMapping
    public ResponseEntity<ClienteDTO> createCliente(@RequestBody ClienteDTO clienteDTO) {
        Cliente entity = clienteDTO.convertToEntity();
        ClienteDTO createdCliente = clienteService.create(entity);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdCliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteDTO> updateCliente(@PathVariable Integer id, @RequestBody ClienteDTO clienteDTO) {
        if (clienteService.findEntityById(id)!= null) {
            Cliente updatedEntity = clienteDTO.convertToEntity();
            updatedEntity.setId(id);

            ClienteDTO updatedCliente = clienteService.update(updatedEntity);
            return ResponseEntity.ok(updatedCliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Integer id) {
        if (clienteService.findById(id) != null) {
            clienteService.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}/enderecos") //lista todos os enderecos so cliente
    public ResponseEntity<Object> listarEnderecosCliente(@PathVariable Integer id) {

        Cliente clienteEntity = clienteService.findEntityById(id);

        if (clienteEntity != null) {
            List<Endereco> enderecos = clienteEntity.getEndereco();

            List<EnderecoDTO> enderecosDTO = enderecos.stream().map(Endereco::convertToDto).collect(Collectors.toList());

            return ResponseEntity.ok(enderecosDTO);

        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("{id}/enderecos") //associa endereco ao cliente
    public ResponseEntity<EnderecoDTO> cadastrarEnderecoCliente(@PathVariable Integer id, @RequestBody EnderecoDTO enderecoDTO) {
        Cliente cliente = clienteService.findEntityById(id);


        if (cliente != null) {

            Endereco endereco = enderecoDTO.convertToEntity();
            cliente.getEndereco().add(endereco);

            EnderecoDTO enderecoCadastrado = enderecoService.create(endereco);

            return ResponseEntity.status(HttpStatus.CREATED).body(enderecoCadastrado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}