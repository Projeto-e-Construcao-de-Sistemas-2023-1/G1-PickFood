package br.pickfood.model.dto.restaurante;

import java.sql.Time;

import com.fasterxml.jackson.annotation.JsonProperty;

import br.pickfood.groups.ICreation;
import br.pickfood.groups.IUpdate;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.restaurante.Restaurante;
import br.pickfood.model.user.User;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class RestauranteDTO extends BaseDTO<Restaurante> {
	
	@Null(groups = {ICreation.class}, message = "{field.null}")
    @NotNull(groups = {IUpdate.class}, message = "{field.not.null}")
	private Integer id;
	
	private Integer userId;
	
	@JsonProperty(value = "nome_fantasia")
    private String nomeFantasia;
    
    private String cnpj;
    
	@JsonProperty(value = "razao_social")
    private String razaoSocial;

	@JsonProperty(value = "horario_abertura")
    private Time horarioAbertura;

	@JsonProperty(value = "horario_fechamento")
    private Time horarioFechamento;
	
	@JsonProperty(value = "taxa_entrega")
    private Double taxaEntrega;
    
    private EnderecoDTO endereco;
    
    private String telefone;

    @Override
    public Restaurante convertToEntity() {
        return Restaurante.builder()
        		.id(this.id)
        		.user(User.builder().id(this.userId).build())
        		.cnpj(this.cnpj)
        		.nomeFantasia(this.nomeFantasia)
        		.razaoSocial(this.razaoSocial)
        		.horarioAbertura(this.horarioAbertura)
        		.horarioFechamento(this.horarioFechamento)
        		.taxaEntrega(this.taxaEntrega)
        		.endereco(endereco.convertToEntity())
        		.telefone(this.telefone)
        		.build();
    }


}
