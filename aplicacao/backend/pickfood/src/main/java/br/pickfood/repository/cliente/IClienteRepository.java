package br.pickfood.repository.cliente;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClienteRepository extends IBaseRepository<Cliente> {

}
