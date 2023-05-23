package br.pickfood.model.restaurante;


import br.pickfood.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Time;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Restaurante")
public class Restaurante extends BaseEntity {

    @Column(name = "nome_fantasia")
    public String nome_fantasia;

    @Column(name = "cnpj")
    public String cnpj;

    @Column(name = "razao_social")
    public String razao_social;

    @Column(name = "horario_abertura")
    public Time horario_abertura;

    @Column(name = "horario_fechamento")
    public Time horario_fechamento;

    @Column(name = "taxa_entrega")
    public float taxa_entrega;


    @Override
    public <D> D convertToDto() {
        //conversão
        return null;
    }
}
