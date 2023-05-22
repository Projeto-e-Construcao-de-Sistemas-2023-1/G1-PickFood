package br.pickfood.model.cliente;

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
@Table(name = "cliente")

// Verificar se está certo - Arthur
public class Cliente extends BaseEntity{

    @Column(name = "nome")
    private String nome;

    @Column(name = "cpf")
    private String cpf;

    @Column(name = "telefone")
    private String telefone;

    @Override
    public <D> D convertToDto() {
        return null;
    }


}
