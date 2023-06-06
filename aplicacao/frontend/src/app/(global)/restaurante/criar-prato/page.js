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

    useEffect(() => {
        console.log(watch("imagem"));
    })

    const criar = (data) => {
        console.log(data);
    }

    return (
        <Container>
           

            <div className={forms}>
                <Form onSubmit={ tratarFormulario(criar) }>

                    <Image
                        src={ 
                            imagemValida.test(watch("imagem")) ? 
                                watch("imagem") 
                                : 
                                "/icons/foto.svg" 
                        }
                        width={ 21 }
                        height={ 21 }
                        className={ imagem }
                        
                        alt="."
                    />
                    
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