package br.pickfood.repository.cliente;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.pedido.Pedido;
import br.pickfood.repository.IBaseRepository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteRepository extends IBaseRepository<Cliente> {

  
    

}
