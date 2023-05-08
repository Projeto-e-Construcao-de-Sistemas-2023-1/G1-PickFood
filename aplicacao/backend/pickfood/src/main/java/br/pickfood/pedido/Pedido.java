package br.pickfood.pedido;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table
public class Pedido {
    @Id
    public int codigo;

    public float valor_total;
    public Date data;


}
