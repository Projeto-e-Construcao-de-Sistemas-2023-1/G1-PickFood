package br.pickfood.model.dto.cliente;

import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ClienteDTO extends BaseDTO<Cliente> {
    private String nome;
    private String cpf;
    private String telefone;

    @Override
    public Cliente convertToEntity() {
        return Cliente.builder()
                .nome(this.nome)
                .cpf(this.cpf)
                .telefone(this.telefone)
                .build();
    }

}
