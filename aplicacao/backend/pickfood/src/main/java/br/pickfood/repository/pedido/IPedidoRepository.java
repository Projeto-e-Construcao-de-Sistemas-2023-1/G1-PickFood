package br.pickfood.repository.pedido;

import br.pickfood.model.pedido.Pedido;
import br.pickfood.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPedidoRepository extends IBaseRepository<Pedido> {

    Pedido findByCodigo(String codigo);

}
