package br.pickfood.view.controller;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.cliente.ClienteDTO;
import br.pickfood.service.cliente.ClienteService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<Object> getAllClientes() {
        List<ClienteDTO> clienteDTOList = clienteService.listarTodos();
        if(clienteDTOList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(clienteDTOList);
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
        if (clienteService.findEntityById(id) == null) {
            Cliente entity = clienteDTO.convertToEntity();
            ClienteDTO updatedCliente = clienteService.update(entity);
            return ResponseEntity.ok(updatedCliente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Integer id) {
        if (clienteService.findById(id) == null) {
            clienteService.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}