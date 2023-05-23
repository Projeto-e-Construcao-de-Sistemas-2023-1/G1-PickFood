package br.pickfood.model.dto.endereco;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.endereco.Endereco;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class EnderecoDTO extends BaseDTO<Endereco> {
	
	private Integer id;
    private String rua;
    private String cep;
    private Integer numero;
    private String complemento;
    private String bairro;

    @Override
    public Endereco convertToEntity() {
    	return Endereco.builder()
    			.id(this.id)
    			.rua(this.rua)
    			.cep(this.cep)
    			.numero(this.numero)
    			.complemento(this.complemento)
    			.bairro(this.bairro)
    			.build();
    }
}
