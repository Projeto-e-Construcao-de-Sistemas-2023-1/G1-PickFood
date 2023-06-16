package br.pickfood.view.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.dto.pedido.PedidoDTO;
import br.pickfood.model.pedido.Pedido;
import br.pickfood.service.pedido.PedidoService;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping
    @Transactional
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<PedidoDTO> realizarPedido(@RequestBody PedidoDTO dto) {
        Pedido entity = dto.convertToEntity();
        return new ResponseEntity(pedidoService.create(entity), HttpStatusCode.valueOf(201));
    }

    @PutMapping("/{id}/cancelar")
    @Transactional
    public ResponseEntity cancelarPedido(@PathVariable Integer id) {
        pedidoService.cancelarPedido(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}/status")
    public ResponseEntity<String> verStatus(@PathVariable Integer id) {

        String status = pedidoService.verStatus(id);
        return ResponseEntity.ok(status);
    }

    @PutMapping("/{id}/confirmar")
    @Transactional
    public ResponseEntity<String> confirmarPedido(@PathVariable Integer id) {
        return ResponseEntity.ok(pedidoService.confirmarPedido(id));
    }
}
