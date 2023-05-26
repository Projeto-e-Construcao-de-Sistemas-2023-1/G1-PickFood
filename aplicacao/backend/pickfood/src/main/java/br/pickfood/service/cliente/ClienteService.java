package br.pickfood.service.cliente;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.pickfood.mapper.ClienteMapper;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.cliente.ClienteDTO;
import br.pickfood.repository.cliente.IClienteRepository;
import br.pickfood.service.BaseServiceImpl;

@Service
public class ClienteService extends BaseServiceImpl<ClienteDTO, Cliente, IClienteRepository> {
    
	@Autowired
	ClienteMapper mapper;
	
	public List<ClienteDTO> listarTodos() {
        return baseRepository.findAll().stream().map(Cliente::convertToDto).collect(Collectors.toList());
    }

	public ClienteDTO update(ClienteDTO dto) {
		Cliente cliente = baseRepository.findById(dto.getId()).get();
		mapper.updateClienteFromDto(dto, cliente);
		return super.update(cliente);
	}
	
}
