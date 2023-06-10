package br.pickfood.model.dto.item;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.dto.restaurante.RestauranteDTO;
import br.pickfood.model.item.Item;
import br.pickfood.model.restaurante.Restaurante;
import lombok.Builder;
import lombok.Data;


@Builder
@Data
public class ItemDTO extends BaseDTO<Item> {
    private float preco;
    private String nome;
    private String tipo;
    private Integer restauranteId;
    private String descricao;
    private String foto;

    @Override
    public Item convertToEntity() {
        return Item.builder()
                .preco(this.preco)
                .nome(this.nome)
                .restaurante(Restaurante.builder().id(restauranteId).build())
                .descricao(this.descricao)
                .foto(this.foto)
                .tipo(this.tipo)
                .build();


    }
}
