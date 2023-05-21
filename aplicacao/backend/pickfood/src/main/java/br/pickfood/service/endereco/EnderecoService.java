package br.pickfood.service.endereco;

import br.pickfood.model.endereco.Endereco;
import br.pickfood.repository.endereco.EnderecoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EnderecoService {

    private final EnderecoRepository enderecoRepository;

    public List<Endereco> listarEnderecos() {
        return enderecoRepository.findAll();
    }

    public Endereco obterEndereco(int id) {
        return enderecoRepository.findById(id).orElse(null);
    }

    public void cadastrarEndereco(Endereco endereco) {
        enderecoRepository.save(endereco);

    }
    public void atualizarEndereco(Endereco endereco) {
        if (!enderecoRepository.existsById(endereco.getId())) {
            throw new IllegalArgumentException("Endereço não encontrado: " + endereco.getId());
        }
        enderecoRepository.save(endereco);
    }

    public void excluirEndereco(int id) {
        if(!enderecoRepository.existsById(id)){
            throw new IllegalArgumentException("Endereço não encontrado: " + id);
        }
        enderecoRepository.deleteById(id);
    }
}
