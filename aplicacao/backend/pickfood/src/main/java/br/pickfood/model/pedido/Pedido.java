package br.pickfood.model.pedido;


import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.pedido.PedidoDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.util.Date;
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder
@Table
public class Pedido extends BaseEntity {


    public Integer codigo;
    public Float valorTotal;
    public Date data;

    @ManyToOne
    @JoinColumn(name = "cliente")
    private Cliente cliente;

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }


    @Override
    public PedidoDTO convertToDto() {

        return PedidoDTO.builder()
                .codigo(this.codigo)
                .valorTotal(this.valorTotal)
                .data(this.data)
                .build();
    }
}
