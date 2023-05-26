package br.pickfood.model.restaurante;


import java.sql.Time;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.model.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@SuperBuilder
@Table(name = "Restaurante")
public class Restaurante extends BaseEntity{

    @Column(name = "nome_fantasia")
    private String nomeFantasia;


    @Column(name = "cnpj")
    private String cnpj;

    @Column(name = "razao_social")
    private String razaoSocial;

    @Column(name = "horario_abertura")
    private Time horarioAbertura;

    @Column(name = "horario_fechamento")
    private Time horarioFechamento;

    @Column(name = "taxa_entrega")
    private Double taxaEntrega;
    
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco")
    private Endereco endereco;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user")
    private User user;

    public RestauranteDTO convertToDto() {
        return RestauranteDTO.builder()
        		.id(this.id)
        		.user(UserDTO.builder()
        				.id(this.user.getId())
        				.senha(this.user.getSenha())
        				.email(this.user.getEmail())
        				.type("restaurante")
        				.build())
        		.cnpj(this.cnpj)
        		.nome_fantasia(this.nomeFantasia)
        		.razao_social(this.razaoSocial)
        		.horario_abertura(this.horarioAbertura)
        		.horario_fechamento(this.horarioFechamento)
        		.taxa_entrega(this.taxaEntrega)
        		.endereco(this.endereco.convertToDto())
        		.build();
    }
}
