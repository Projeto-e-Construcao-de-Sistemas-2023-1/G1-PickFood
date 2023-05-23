package br.pickfood.model.restaurante;


import java.sql.Time;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.model.user.User;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
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
public class Restaurante extends BaseEntity{

    @Column(name = "nome_fantasia")
    private String nome_fantasia;
    
    @OneToOne
    @JoinColumn(name = "user")
    private User user;

    @Column(name = "cnpj")
    private String cnpj;

    @Column(name = "razao_social")
    private String razao_social;

    @Column(name = "horario_abertura")
    private Time horario_abertura;

    @Column(name = "horario_fechamento")
    private Time horario_fechamento;

    @Column(name = "taxa_entrega")
    private Double taxa_entrega;
    
    @OneToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "endereco")
    private Endereco endereco;

    public RestauranteDTO convertToDto() {
        return RestauranteDTO.builder()
        		.id(this.id)
        		.user_id(this.getUser().getId())
        		.cnpj(this.cnpj)
        		.nome_fantasia(this.nome_fantasia)
        		.razao_social(this.razao_social)
        		.horario_abertura(this.horario_abertura)
        		.horario_fechamento(this.horario_fechamento)
        		.taxa_entrega(this.taxa_entrega)
        		.endereco(this.endereco.convertToDto())
        		.build();
    }
}
