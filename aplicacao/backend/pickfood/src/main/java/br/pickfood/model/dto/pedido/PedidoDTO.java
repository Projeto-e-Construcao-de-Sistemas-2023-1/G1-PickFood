package br.pickfood.model.dto.pedido;


import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.pedido.Pedido;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class PedidoDTO  extends BaseDTO<Pedido> {
    private Integer codigo;
    private Float valorTotal;
    private Date data;

    @Override
    public Pedido convertToEntity() {
        return Pedido.builder()
                .codigo(this.codigo)
                .valorTotal(this.valorTotal)
                .data(this.data)
                .build();
    }
}
