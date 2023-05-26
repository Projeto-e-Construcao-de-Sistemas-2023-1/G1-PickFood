package br.pickfood.model.user;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.cliente.Cliente;
import br.pickfood.model.dto.user.UserDTO;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Entity
@Table(name = "user")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@SuperBuilder
public class User extends BaseEntity implements UserDetails {
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "senha")
	private String senha;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Restaurante restaurante;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private Cliente cliente;

    @Override
	public UserDTO convertToDto() {
    	UserDTO dto = new UserDTO();
    	dto.setId(this.id);
    	dto.setIdCliente(this.cliente.getId());
    	dto.setIdRestaurante(this.restaurante.getId());
    	dto.setEmail(this.email);
    	dto.setSenha(this.senha);
    	
    	if(restaurante != null) {
    		String name = restaurante.getClass().getName();
    		dto.setType(name.substring(name.lastIndexOf('.') + 1).toLowerCase());
    	}
    	
    	if(cliente != null) {
    		String name = cliente.getClass().getName();
    		dto.setType(name.substring(name.lastIndexOf('.') + 1).toLowerCase());
    	}
    	
    	return dto;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override
	public String getPassword() {
		return senha;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
