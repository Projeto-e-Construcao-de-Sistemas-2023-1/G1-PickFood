package br.pickfood.model.dto.login;

import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor
public class LoginDTO {
    private String email;
    private String senha;

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }
}
