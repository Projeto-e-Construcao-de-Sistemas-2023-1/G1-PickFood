package br.pickfood.configuration;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class SwaggerConstants {
	
    public static final String OK = "200";
    public static final String OK_DESCRIPTION = "Operação realizada com sucesso.";
    
    public static final String BAD_REQUEST = "400";
    public static final String BAD_REQUEST_DESCRIPTION = "Os dados recebidos não são válidos.";
    
    public static final String UNAUTHORIZED = "401";
    public static final String UNAUTHORIZED_DESCRIPTION = 
    		"Acesso não autorizado. Usuário não está logado ou não tem autorização para utilizar o recurso.";
    
    public static final String INTERNAL_ERROR = "500";
    public static final String INTERNAL_ERROR_DESCRIPTION = "Erro inesperado na Aplicação.";
    
    public static final String NO_CONTENT = "204";
    public static final String NO_CONTENT_DESCRIPTION = "Item não encontrado.";
    
    public static final String CREATED = "201";
    public static final String CREATED_DESCRIPTION = "Item criado.";
    
    public static final String FIND_ALL = "Buscar todos os itens.";
    public static final String FIND_ALL_DESCRIPTION = "Buscar todos os itens. A busca poderá ser páginada ou não.";
    public static final String FIND_ONE = "Buscar um item";
    
    public static final String UPDATE = "Atualizar um item.";
    public static final String UPDATE_SINGLE_ATTRIBUTE = "Atualizar um atributo do item. Altera apenas campos simples"
    		+ " e datas no formato yyyy-MM-dd. NÃO ALTERA ATRIBUTOS REFERENTES A RELACIONAMENTOS.";
    public static final String INSERT = "Inserir um item.";
    public static final String DELETE = "Excluir um item.";
    
    public static final String SORT_DESCRIPTION = "Define por qual campo a listagem de retorno será ordenada, " +
    											"e a ordenação separada por %23 (#), que poderá ser ASC ou DESC.";
    public static final String SORT_EXAMPLE = "?page=2000&size=5&sort=certifiedName%23desc&sort=id irá ordernar por " + 
    											"certifiedName descendente e id ascendente.";
    
    public static final String PAGE_DESCRIPTION = "Número da página. Começa em zero. Valor padrão zero.";
    public static final String SIZE_DESCRIPTION = "Quantidade de registros de uma página. Valor padrão 10.";
    
    public static final String USER_LOGIN = "Efetuar Login de um Usuário.";
    
    public static final String INSERT_EAD_CERTIFIED = "Inserir um certificado EAD.";
    
    public static final String FIND_ALL_SHORT = "Buscar todos e retornar a versão reduzida dos itens.";
    public static final String FIND_ALL_SHORT_DESCRIPTION = 
    		"Buscar todos e retornar a versão reduzida dos itens. A busca poderá ser páginada ou não.";

}
