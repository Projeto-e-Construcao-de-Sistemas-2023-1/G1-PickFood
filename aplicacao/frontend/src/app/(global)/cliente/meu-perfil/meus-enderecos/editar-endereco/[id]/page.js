'use client';

import Form from "@/components/Form";
import Link from "next/link";
import {
    cadastrar,
    margin,
    excluir
} from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";
import { atualizarEndereco, buscarEnderecoPorId, excluirEndereco } from "@/services/endereco";
import { useRouter } from "next/navigation";
import Retornar from "@/components/Retornar";


export default function EditarEndereco({ params: { id } }) {

    const router = useRouter();

    const { register: registrar, handleSubmit: tratarFormulario, formState: { errors: erros } } = useForm({
        defaultValues: async () => {

            const {
                apelido,
                cep,
                bairro,
                rua,
                numero,
                complemento,
                estado,
                cidade
            } = buscarEnderecoPorId(id);

            return {
                apelido,
                cep,
                bairro,
                rua,
                numero,
                complemento,
                estado,
                cidade
            }
        }
    });

    const editar = (data) => {

        console.log(data);
        
        atualizarEndereco(id, data);

        router.push("/cliente/meu-perfil/meus-enderecos");
    }

    const removerEndereco = () => {
        excluirEndereco(id);

        router.push("/cliente/meu-perfil/meus-enderecos");
    }

    return(
      <>
        <Retornar navigate={ () => router.back() } />
        <Form onSubmit={ tratarFormulario(editar) }>
            <Form.Erros erros={ erros } />

            <Form.Field>
                <Form.Label>Apelido</Form.Label>
                <Form.Input registrar={{ ...registrar("apelido", { required: mensagens.required("apelido") }) }} type={ "text" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>CEP</Form.Label>
                <Form.Input registrar={{ ...registrar("cep", { 
                    required: mensagens.required("cep"),
                    minLength: { message: mensagens.minLength("cep", 8), value: 8 },
                    onChange: (e) => {
                        const valor = e.target.value;
                                        
                        const apenasNumeros = /^\d+$/;

                        for (const indice in valor) {
                            if (!apenasNumeros.test(valor[indice])) {
                                e.target.value = valor.substring(0, indice);
                            }
                        }

                        if (valor.length > 8) {
                            e.target.value = valor.substring(0, 8);
                        }
                    }
                    }) }} type={ "text" }/>
            </Form.Field> 

            <Form.Field>
                <Form.Label>Bairro</Form.Label>
                <Form.Input registrar={{ ...registrar("bairro", { required: mensagens.required("bairro") }) }} type={ "text" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>Rua</Form.Label>
                <Form.Input registrar={{ ...registrar("rua", { required: mensagens.required("rua") }) }} type={ "text" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>Número</Form.Label>
                <Form.Input registrar={{ ...registrar("numero", { required: mensagens.required("numero") }) }} type={ "number" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>Complemento</Form.Label>
                <Form.Input registrar={{ ...registrar("complemento") }} type={ "text" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>Estado</Form.Label>
                <Form.Input registrar={{ ...registrar("estado", { required: mensagens.required("estado") }) }} type={ "text" }/>
            </Form.Field>

            <Form.Field>
                <Form.Label>Cidade</Form.Label>
                <Form.Input registrar={{ ...registrar("cidade", { required: mensagens.required("cidade")}) }} type={ "text"} />
            </Form.Field>

            <div className={ margin }>
                <Form.Button onClick={ cadastrar }>Salvar alterações</Form.Button>
                <div className={ excluir } onClick={() => removerEndereco() }>Excluir endereco</div>
            </div>
        </Form>
    </>
       
    )
}