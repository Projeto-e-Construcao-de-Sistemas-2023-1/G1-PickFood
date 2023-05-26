package br.pickfood.model.dto.restaurante;

import java.sql.Time;

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
	
	private UserDTO user;
	
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
        		.user(User.builder().id(this.user.getId())
        				.email(this.user.getEmail())
        				.senha(this.user.getSenha())
        				.build())
        		.cnpj(this.cnpj)
        		.nomeFantasia(this.nome_fantasia)
        		.razaoSocial(this.razao_social)
        		.horarioAbertura(this.horario_abertura)
        		.horarioFechamento(this.horario_fechamento)
        		.taxaEntrega(this.taxa_entrega)
        		.endereco(endereco.convertToEntity())
        		.build();
    }
}
