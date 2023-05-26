package br.pickfood.model.dto.item;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.item.Item;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class ItemDTO extends BaseDTO<Item> {
    private float preco;
    private String nome;
    private String tipo;
    private String descricao;
    private String foto;

    @Override
    public Item convertToEntity() {
        return Item.builder()
                .preco(this.preco)
                .nome(this.nome)
                .descricao(this.descricao)
                .foto(this.foto)
                .build();


    }
}
