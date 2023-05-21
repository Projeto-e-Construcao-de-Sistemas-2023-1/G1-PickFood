package br.pickfood.model.restaurante;


import br.pickfood.model.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Restaurante")
public class Restaurante extends BaseEntity {

    public String nome_fantasia;
    public String cnpj;
    public String razao_social;
    public String horario_funcionamento;
    public float taxa_entrega;


    @Override
    public <D> D convertToDto() {
        //conversão
        return null;
    }
}
