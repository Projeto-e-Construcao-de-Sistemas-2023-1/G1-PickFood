package br.pickfood.model.item;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.dto.user.UserDTO;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;


@Table
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Item extends BaseEntity {

    @Column(name = "preco")
    private float preco;
    @Column(name = "nome")
    private String nome;
    @Column(name = "tipo")
    private String tipo;
    @Column(name = "descricao")
    private String descricao;


    @Override
    public ItemDTO convertToDto() {
        return ItemDTO.builder()
                .preco(this.preco)
                .tipo(this.tipo)
                .descricao(this.descricao)
                .build();
    }
}
