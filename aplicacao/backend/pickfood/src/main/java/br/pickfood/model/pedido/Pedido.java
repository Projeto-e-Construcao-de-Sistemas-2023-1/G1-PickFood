package br.pickfood.model.pedido;


import java.util.Date;
import java.util.List;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.pedido.PedidoDTO;
import br.pickfood.model.item.pedido.ItemPedido;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
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
    
    @OneToMany
    private List<ItemPedido> itemPedidoList;

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
