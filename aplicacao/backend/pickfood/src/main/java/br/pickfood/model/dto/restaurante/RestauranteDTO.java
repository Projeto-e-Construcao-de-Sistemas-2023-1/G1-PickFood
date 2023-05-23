package br.pickfood.model.dto.restaurante;

import java.sql.Time;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.model.user.User;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class RestauranteDTO extends BaseDTO<Restaurante> {
	
	private Integer id;
	
	private Integer user_id;
	
    private String nome_fantasia;

    private String cnpj;

    private String razao_social;

    private Time horario_abertura;

    private Time horario_fechamento;

    private Double taxa_entrega;
    
    private EnderecoDTO endereco;

    @Override
    public Restaurante convertToEntity() {
        return Restaurante.builder()
        		.id(this.id)
        		.user(User.builder().id(this.user_id).build())
        		.cnpj(this.cnpj)
        		.nome_fantasia(this.nome_fantasia)
        		.razao_social(this.razao_social)
        		.horario_abertura(this.horario_abertura)
        		.horario_fechamento(this.horario_fechamento)
        		.taxa_entrega(this.taxa_entrega)
        		.endereco(endereco.convertToEntity())
        		.build();
    }
}
