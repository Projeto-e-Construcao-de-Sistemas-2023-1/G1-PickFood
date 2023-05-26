package br.pickfood.repository.item;

import br.pickfood.model.item.Item;
import br.pickfood.repository.IBaseRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IItemRepository extends IBaseRepository<Item> {
    @Query(value = "select i.id, i.preco, i.tipo, i.descricao, i.restaurante, i.foto, i.nome from item i where i.restaurante = :id ", nativeQuery = true)
    List<Item> findItemByRestaurante(@Param("id") Integer id);
}
