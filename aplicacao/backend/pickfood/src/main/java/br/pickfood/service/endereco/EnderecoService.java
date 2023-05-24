package br.pickfood.service.endereco;

import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.repository.endereco.IEnderecoRepository;
import br.pickfood.service.BaseServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@AllArgsConstructor
public class EnderecoService extends BaseServiceImpl<EnderecoDTO, Endereco,IEnderecoRepository> {


    public List<EnderecoDTO> listarTodos() {
        return baseRepository.findAll().stream().map(Endereco::convertToDto).collect(Collectors.toList());
    }
}
