'use client';

import Logo from "@/components/Logo";
import Form from "@/components/Form";
import Link from "next/link";
import {
    cadastrar,
    margin
} from "./styles.module.scss";
import { useForm } from "react-hook-form";


export default function EditarEndereco() {

    const { register: registrar, handleSubmit: tratarFormulario } = useForm();

    const editar = (data) => {
        console.log(data);
    }

    return(
      
        <Form onSubmit={ tratarFormulario(editar) }>
            <Form.Field>
                <Form.Label>Apelido</Form.Label>
                <Form.Input defaultValue="ola mundo" registrar={{ ...registrar("apelido") }}/>
            </Form.Field>
            <Form.Field>
                <Form.Label>CEP</Form.Label>
                <Form.Input registrar={{ ...registrar("cep") }}/>
            </Form.Field>
            <Form.Field>
                <Form.Label>Bairro</Form.Label>
                <Form.Input registrar={{ ...registrar("bairro") }}/>
            </Form.Field>
            <Form.Field>
                <Form.Label>Rua</Form.Label>
                <Form.Input registrar={{ ...registrar("rua") }}/>
            </Form.Field>
            <Form.Field>
                <Form.Label>Número</Form.Label>
                <Form.Input registrar={{ ...registrar("numero") }}/>
            </Form.Field> 
            <Form.Field>
                <Form.Label>Complemento</Form.Label>
                <Form.Input registrar={{ ...registrar("complemento") }}/>
            </Form.Field> 
            <Form.Field>
                <Form.Label>Estado</Form.Label>
                <Form.Input registrar={{ ...registrar("estado") }}/>
            </Form.Field> 
            <Form.Field>
                <Form.Label>Cidade</Form.Label>
                <Form.Input registrar={{ ...registrar("cidade") }}/>
            </Form.Field> 

            <div className={ margin }>
                <Form.Button onClick={ cadastrar }>Salvar alterações</Form.Button>
            </div>
        </Form>
       
    )
}