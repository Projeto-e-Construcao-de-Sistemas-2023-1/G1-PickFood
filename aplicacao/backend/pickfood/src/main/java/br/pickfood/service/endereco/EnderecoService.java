package br.pickfood.service.endereco;

import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.repository.endereco.IEnderecoRepository;
import br.pickfood.service.BaseServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class EnderecoService extends BaseServiceImpl<EnderecoDTO, Endereco,IEnderecoRepository> {

}
