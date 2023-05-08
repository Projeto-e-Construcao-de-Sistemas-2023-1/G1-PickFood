package br.pickfood.restaurante.dto;

import br.pickfood.restaurante.model.Restaurante;
import jakarta.validation.constraints.*;

public record DadosRestauranteDTO(
        @NotBlank
        String nome_fantasia,
        @NotBlank
        String cnpj,
        @NotBlank
        String razao_social,
        @NotBlank
        String horario_funcionamento,
        @NotBlank
        float taxa_entrega
) {


}
