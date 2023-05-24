package br.pickfood.service.pedido;

import br.pickfood.model.dto.pedido.PedidoDTO;
import br.pickfood.model.pedido.Pedido;
import br.pickfood.repository.pedido.IPedidoRepository;
import br.pickfood.service.BaseServiceImpl;
import org.springframework.stereotype.Service;

import javax.print.DocFlavor;

@Service
public class PedidoService extends BaseServiceImpl<PedidoDTO, Pedido, IPedidoRepository> {

    public Pedido cancelarPedido(String codigo) {
       Pedido pedido = baseRepository.findByCodigo(codigo);
       return null;
    }

    public String verStatus(String codigo) {
        return null;
    }

    public String confirmarPedido(String codigo) {
        return null;
    }

    public String consultarHistorico(String codigo) {
        return null;
    }
}
