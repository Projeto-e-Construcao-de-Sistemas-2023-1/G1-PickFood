package br.pickfood.model.restaurante;


import java.sql.Time;
import java.util.List;

import org.hibernate.annotations.DynamicUpdate;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.model.item.Item;
import br.pickfood.model.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
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
@DynamicUpdate
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
    
    @Column(name = "telefone")
    private String telefone;

    @OneToMany(mappedBy = "restaurante", cascade = CascadeType.ALL)
    private List<Item> itens;

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
        		.nomeFantasia(this.nomeFantasia)
        		.razaoSocial(this.razaoSocial)
        		.horarioAbertura(this.horarioAbertura)
        		.horarioFechamento(this.horarioFechamento)
        		.taxaEntrega(this.taxaEntrega)
        		.endereco(this.endereco.convertToDto())
        		.telefone(this.telefone)
        		.build();
    }
}
