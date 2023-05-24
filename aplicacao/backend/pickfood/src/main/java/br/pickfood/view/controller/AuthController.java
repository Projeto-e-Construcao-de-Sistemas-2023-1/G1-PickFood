package br.pickfood.view.controller;

import br.pickfood.infra.security.TokenService;
import br.pickfood.infra.security.dto.DadosTokenJWT;

import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.user.User;
import br.pickfood.service.auth.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

   @PostMapping
   public ResponseEntity login(@RequestBody @Valid UserDTO dto){
       User entity = dto.convertToEntity();
       var authToken = new UsernamePasswordAuthenticationToken(entity.getUsername(), entity.getPassword());
       var autentication =  manager.authenticate(authToken);
       var tokenJWT =  tokenService.gerarToken((User) autentication.getPrincipal());
       return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
   }
}
