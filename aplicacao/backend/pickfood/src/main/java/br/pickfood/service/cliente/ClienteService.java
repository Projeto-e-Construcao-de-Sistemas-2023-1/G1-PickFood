package br.pickfood.service.cliente;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.cliente.ClienteDTO;
import br.pickfood.repository.cliente.IClienteRepository;
import br.pickfood.service.BaseServiceImpl;
import org.springframework.stereotype.Service;

@Service
public class ClienteService extends BaseServiceImpl<ClienteDTO, Cliente, IClienteRepository> {
}
