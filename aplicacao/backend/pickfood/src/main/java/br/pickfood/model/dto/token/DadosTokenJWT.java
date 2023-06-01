package br.pickfood.model.dto.token;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.restaurante.Restaurante;
import lombok.AllArgsConstructor;
import lombok.Data;

@AllArgsConstructor
@Data
public class DadosTokenJWT {

    private String token;
    private Integer id;
    private Integer idCliente;
    private Integer idRestaurante;
    private String type;



}
