package br.pickfood.view.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
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
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ItemDTO> cadastrarItem(@RequestBody PedidoDTO dto){
        Pedido entity = dto.convertToEntity();

        pedidoService.create(entity);

        return new ResponseEntity(dto, HttpStatusCode.valueOf(201));
    }
    
    @PutMapping("/{codigo}/cancelar")
    public ResponseEntity<String> cancelarPedido(@PathVariable String codigo) {
        try {
            pedidoService.cancelarPedido(codigo);
            return ResponseEntity.ok("Pedido cancelado com sucesso.");
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @GetMapping("/{codigo}/status")
    public ResponseEntity<String> verStatus(@PathVariable String codigo) {
        try {
            String status = pedidoService.verStatus(codigo);
            return ResponseEntity.ok(status);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{codigo}/historico")
    public ResponseEntity<String> consultarHistorico(@PathVariable String codigo) {
        try {
            String historico = pedidoService.consultarHistorico(codigo);
            return ResponseEntity.ok(historico);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{codigo}/confirmar")
    public ResponseEntity<String> confirmarPedido(@PathVariable String codigo) {
        try {
            pedidoService.confirmarPedido(codigo);
            return ResponseEntity.ok("Pedido confirmado com sucesso.");
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
