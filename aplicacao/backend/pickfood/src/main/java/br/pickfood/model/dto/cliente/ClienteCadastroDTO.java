package br.pickfood.model.dto.cliente;

import br.pickfood.model.dto.login.LoginDTO;
import lombok.Data;

@Data
public class ClienteCadastroDTO {
    private String nome;
    private String cpf;
    private String telefone;
    private LoginDTO login;

    public ClienteCadastroDTO(String nome, String cpf, String telefone, LoginDTO login){
        this.cpf = cpf;
        this.nome = nome;
        this.telefone = telefone;
        this.login = login;
    }
}


