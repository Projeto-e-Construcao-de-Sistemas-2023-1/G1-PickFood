//package br.pickfood.view.controller;
//
//import br.pickfood.service.token.TokenService;
//import br.pickfood.infra.security.dto.DadosTokenJWT;
//
//import br.pickfood.model.dto.user.UserDTO;
//import br.pickfood.model.user.User;
//import br.pickfood.service.auth.AuthService;
//import jakarta.validation.Valid;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/login")
//public class AuthController {
//
//    @Autowired
//    private AuthenticationManager manager;
//
//    @Autowired
//    private TokenService tokenService;
//
//   @PostMapping
//   public ResponseEntity login(@RequestBody @Valid UserDTO dto){
//
//           BCryptPasswordEncoder pwdEncode = new BCryptPasswordEncoder();
//           dto.setSenha(pwdEncode.encode(dto.getSenha()));
//           var authToken = new UsernamePasswordAuthenticationToken(dto.getEmail(), dto.getSenha());
//           var autentication = manager.authenticate(authToken);
//           var tokenJWT =  tokenService.gerarToken((User) autentication.getPrincipal());
//           System.out.println("token gerado: " + tokenJWT);
//           return ResponseEntity.ok(new DadosTokenJWT(tokenJWT));
//
//   }
//}
