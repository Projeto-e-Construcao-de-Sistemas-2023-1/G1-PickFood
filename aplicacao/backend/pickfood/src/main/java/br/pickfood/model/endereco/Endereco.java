package br.pickfood.model.endereco;

import br.pickfood.model.BaseEntity;
import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.model.restaurante.Restaurante;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@SuperBuilder
@Table(name = "endereco")
public class Endereco extends BaseEntity {

    @Column(name = "rua")
    private String rua;

    @Column(name = "cep")
    private String cep;

    @Column(name = "numero")
    private Integer numero;

    @Column(name = "complemento")
    private String complemento;

    @Column(name = "bairro")
    private String bairro;
    
    @OneToOne(mappedBy = "endereco")
    private Restaurante restaurante;
    
    @Override
    public EnderecoDTO convertToDto() {
        return EnderecoDTO.builder()
        		.id(this.id)
        		.rua(this.rua)
        		.cep(this.cep)
        		.numero(this.numero)
        		.complemento(this.complemento)
        		.bairro(this.bairro)
        		.build();
    }
}
