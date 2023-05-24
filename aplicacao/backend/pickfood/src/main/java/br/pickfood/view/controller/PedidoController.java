package br.pickfood.view.controller;

import br.pickfood.service.pedido.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.NoSuchElementException;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

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
