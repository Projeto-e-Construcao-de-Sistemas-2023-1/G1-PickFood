package br.pickfood.model.item;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.item.ItemDTO;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.persistence.*;
import lombok.*;


@Table
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class Item extends BaseEntity {

    @Column(name = "preco")
    private Float preco;

    @Column(name = "nome")
    private String nome;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "foto")
    private String foto;

    @ManyToOne()
    @JoinColumn(name = "restaurante")
    private Restaurante restaurante;

    @Override
    public ItemDTO convertToDto() {
        return ItemDTO.builder()
                .preco(this.preco)
                .tipo(this.tipo)
                .descricao(this.descricao)
                .foto(this.foto)
                .build();
    }
}
