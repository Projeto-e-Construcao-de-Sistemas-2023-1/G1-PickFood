package br.pickfood.view.controller;

import br.pickfood.model.dto.login.LoginDTO;
import br.pickfood.model.dto.token.DadosTokenJWT;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import br.pickfood.service.token.TokenService;
import jakarta.validation.Valid;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class AuthController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<DadosTokenJWT> login(@RequestBody @Valid UserDTO dto) {
        System.out.println(dto);
        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
        Authentication authentication = manager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String tokenJWT = tokenService.gerarToken((User) authentication.getPrincipal());
        return ResponseEntity.ok(new DadosTokenJWT(tokenJWT, dto.getId(), dto.getIdCliente(), dto.getIdRestaurante(), dto.getType()));

    }
}
