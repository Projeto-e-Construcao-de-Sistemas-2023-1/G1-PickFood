package br.pickfood.view.controller;


import br.pickfood.model.dto.endereco.EnderecoDTO;
import br.pickfood.service.endereco.EnderecoService;
import br.pickfood.model.endereco.Endereco;
import br.pickfood.service.endereco.EnderecoService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/endereco")
public class EnderecoController {


    @Autowired
    private EnderecoService enderecoService;


    @GetMapping
    public ResponseEntity<Object> getAllEnderecos() {
        List<Endereco> entityList = enderecoService.findAll()

        List<EnderecoDTO> enderecoDTOList = DTOConverter.convertToDTOList(entityList, EnderecoDTO.class);

        if(enderecoDTOList.isEmpty())
            return ResponseEntity.notFound().build();

        return ResponseEntity.ok(enderecoDTOList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnderecoDTO> getEnderecoById(@PathVariable Integer id) {
        EnderecoDTO enderecoDTO = enderecoService.findById(id);
        if (enderecoDTO != null) {
            return ResponseEntity.ok(enderecoDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<EnderecoDTO> createEndereco(@RequestBody EnderecoDTO enderecoDTO) {
        Endereco entity = enderecoDTO.convertToEntity();
        EnderecoDTO createdEndereco = enderecoService.create(entity);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdEndereco);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnderecoDTO> updatedEndereco(@PathVariable Integer id, @RequestBody EnderecoDTO enderecoDTO) {
        if (enderecoService.findEntityById(id) == null) {
             entity = enderecoDTO.convertToEntity();
            EnderecoDTO updatedEndereco = enderecoService.update(entity);
            return ResponseEntity.ok(updatedEndereco);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEndereco(@PathVariable Integer id) {
        if (enderecoService.findById(id) == null) {
            enderecoService.delete(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
