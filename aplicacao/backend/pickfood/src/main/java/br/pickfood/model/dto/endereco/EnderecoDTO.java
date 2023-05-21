package br.pickfood.model.dto.endereco;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.endereco.Endereco;


public class EnderecoDTO extends BaseDTO<Endereco> {

    private String rua;
    private String cep;
    private int numero;
    private String complemento;
    private String bairro;

    @Override
    public <E> E convertToEntity() {
        return null;
    }
}
