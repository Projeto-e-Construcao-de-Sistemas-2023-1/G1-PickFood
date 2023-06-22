package br.pickfood.model.dto;

public abstract class BaseDTO<E> {

	public abstract <E> E convertToEntity();


}
