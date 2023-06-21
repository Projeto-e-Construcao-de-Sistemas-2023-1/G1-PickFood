package br.pickfood.model.dto.pedido;


import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import br.pickfood.groups.ICreation;
import br.pickfood.groups.IUpdate;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.dto.item.pedido.ItemPedidoDTO;
import br.pickfood.model.pedido.Pedido;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class PedidoDTO  extends BaseDTO<Pedido> {
	
    @Null(groups = {ICreation.class}, message = "{field.null}")
    @NotNull(groups = {IUpdate.class}, message = "{field.not.null}")
    private Integer id;
    
	private Integer codigo;
    private Float valorTotal;
    private Date data;
    private List<ItemPedidoDTO> itemPedidoList;
    private Integer clienteId;
    private Integer restauranteId;

    @Override
    public Pedido convertToEntity() {
        return Pedido.builder()

                .valorTotal(this.valorTotal)
                .cliente(Cliente.builder().id(clienteId).build())
                .restaurante(Restaurante.builder().id(restauranteId).build())
                .itemPedidoList(itemPedidoList.stream().map(ItemPedidoDTO::convertToEntity).collect(Collectors.toList()))
                .data(this.data)
                .build();
    }
}
