package br.pickfood.model.dto.restaurante;

import br.pickfood.model.dto.BaseDTO;
import br.pickfood.model.restaurante.Restaurante;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class RestauranteDTO extends BaseDTO<Restaurante> {


    @Override
    public <E> E convertToEntity() {
        return null;
    }
}
