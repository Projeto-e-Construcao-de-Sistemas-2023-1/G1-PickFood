package br.pickfood.restaurante.model;


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
public class Restaurante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public String id;
    public String nome_fantasia;
    public String cnpj;
    public String razao_social;
    public String horario_funcionamento;
    public float taxa_entrega;





}
