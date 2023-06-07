'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import { 
    forms,
    imagem
} from "./styles.module.scss"
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function CriarPrato() {

    const { register: registrar, handleSubmit: tratarFormulario, watch } = useForm();
    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i

    const criar = (data) => {
        console.log(data);
    }

    return (
        <Container>
            {
                !imagemValida.test(watch("imagem")) ?
                    <Image
                        src={ "/icons/foto.svg" }
                        width={ 87 }
                        height={ 87 }
                        className={ imagem }
                        
                        alt="."
                    />
                    :
                    <div>
                        <Image
                            src={ watch("imagem") }
                            width={ 120 }
                            height={ 120 }
                            objectFit={ "cover" }
                            className={ imagem }
                            alt="."
                        />
                    </div>
            }

            <div className={forms}>
                <Form onSubmit={ tratarFormulario(criar) }>

                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input registrar={{ ...registrar("nome") }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input registrar={{ ...registrar("tipo") }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input registrar={{ ...registrar("preco") }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input registrar={{ ...registrar("descricao") }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Link da imagem</Form.Label>
                        <Form.Input registrar={{ ...registrar("imagem") }} type={ "text" }></Form.Input>
                    </Form.Field>

                    <Form.Button>Continuar</Form.Button>
                </Form>
            </div>
        </Container>
    )
}