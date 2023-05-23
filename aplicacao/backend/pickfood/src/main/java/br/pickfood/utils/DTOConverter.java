package br.pickfood.utils;


import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

public class DTOConverter {

    public static <E, D> List<D> convertToDTOList(List<E> entityList, Class<D> dtoClass) {
        List<D> dtoList = new ArrayList<>();

        for (E entity : entityList) {
            D dto;
            try {
                dto = dtoClass.getDeclaredConstructor().newInstance();
            } catch (Exception e) {
                throw new RuntimeException("Erro ao instanciar DTO.", e);
            }

            Field[] entityFields = entity.getClass().getDeclaredFields();
            Field[] dtoFields = dtoClass.getDeclaredFields();

            for (Field dtoField : dtoFields) {
                for (Field entityField : entityFields) {
                    if (dtoField.getName().equals(entityField.getName()) && dtoField.getType() == entityField.getType()) {
                        dtoField.setAccessible(true);
                        entityField.setAccessible(true);

                        try {
                            Object value = entityField.get(entity);
                            dtoField.set(dto, value);
                        } catch (IllegalAccessException e) {
                            throw new RuntimeException("Erro ao copiar valor da propriedade.", e);
                        }

                        break;
                    }
                }
            }

            dtoList.add(dto);
        }

        return dtoList;
    }
}