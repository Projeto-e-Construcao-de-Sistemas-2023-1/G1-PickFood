package br.pickfood.service.pedido;

import br.pickfood.enums.pedido.StatusPedido;
import br.pickfood.model.dto.pedido.PedidoDTO;
import br.pickfood.model.pedido.Pedido;
import br.pickfood.repository.pedido.IPedidoRepository;
import br.pickfood.service.BaseServiceImpl;
import org.springframework.stereotype.Service;


@Service
public class PedidoService extends BaseServiceImpl<PedidoDTO, Pedido, IPedidoRepository> {

    public void cancelarPedido(Integer id) {
        baseRepository.delete(buscar(id));
    }

    public String verStatus(Integer id) {
        return baseRepository.findStatusById(id).toString();
    }

    public String confirmarPedido(Integer id) {
        Pedido entity = buscar(id);
        entity.status = StatusPedido.CONFIRMADO.toString();
        baseRepository.save(entity);
        return entity.status;
    }


    private Pedido buscar(Integer id){
        return baseRepository.findById(id).get();
    }
}
