package br.pickfood.repository.item;

import br.pickfood.model.item.Item;
import br.pickfood.repository.IBaseRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IItemRepository extends IBaseRepository<Item> {
}
