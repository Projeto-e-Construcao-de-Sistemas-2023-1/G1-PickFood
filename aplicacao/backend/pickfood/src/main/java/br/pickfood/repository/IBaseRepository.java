package br.pickfood.repository;

import br.pickfood.model.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface IBaseRepository<E> extends JpaRepository<E,Integer>, CrudRepository<E,Integer> {

}
