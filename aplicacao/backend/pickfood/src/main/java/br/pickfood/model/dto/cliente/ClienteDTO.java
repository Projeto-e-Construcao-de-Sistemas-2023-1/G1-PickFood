package br.pickfood.model.dto.cliente;

import br.pickfood.groups.ICreation;
import br.pickfood.groups.IUpdate;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class ClienteDTO extends BaseDTO<Cliente> {
    @Null(groups = {ICreation.class}, message = "{field.null}")
    @NotNull(groups = {IUpdate.class}, message = "{field.not.null}")
    private Integer id;
    private Integer userId;
    private String nome;
    private String cpf;
    private String telefone;

    @Override
    public Cliente convertToEntity() {
        return Cliente.builder()
                .user(User.builder()
                        .id(this.userId)
                        .build())
                .nome(this.nome)
                .cpf(this.cpf)
                .telefone(this.telefone)
                .build();
    }

}
