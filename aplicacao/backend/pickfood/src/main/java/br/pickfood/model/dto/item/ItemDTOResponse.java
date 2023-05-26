package br.pickfood.model.dto.item;

import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.model.restaurante.Restaurante;

public record ItemDTOResponse(
        float preco,
        String nome,
        String tipo,
        String descricao,
        String foto,
        String nome_fantasia
        ) {
}
