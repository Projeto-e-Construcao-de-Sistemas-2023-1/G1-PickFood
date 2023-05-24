package br.pickfood.service.auth;

import br.pickfood.repository.user.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    private IUserRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }
}
