'use client';

import Image from "next/image";
import Form from "@/components/form";
import Container from "@/components/Container";
import Link from "next/link";
import { 
    title,
    center,
    forms,
    excluirConta,
    textoExcluirConta,
    opcoes
} from "./styles.module.scss"
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Cadastro1() {

    const [ativo, setAtivo] = useState(false);

    const authenticate = () => {
        // request
    }

    return (
        <Container>

            <Modal ativo={ ativo }>
                <Modal.Cabecalho>
                    <Modal.Icone svg="/icons/aviso.svg"/>
                    <Modal.Titulo>Tem certeza que deseja excluir sua conta?</Modal.Titulo>
                </Modal.Cabecalho>

                <Modal.Rodape>
                    <Modal.BotaoConfirmar/>
                    <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
                </Modal.Rodape>
            </Modal>

            <h2 className={ [center, title].join(' ') }>Minhas informações</h2>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>Nome do estabelecimento</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Endereço</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <div className={ opcoes }>
                    <Form.Button onClick={ () => authenticate() }>Salvar alterações</Form.Button>
                    <div className={ excluirConta } onClick={ () => { setAtivo(prev => !prev) } }>
                    <div className={ textoExcluirConta }>Excluir conta</div>
                    </div>
                </div>
                
            </Form>
            </div>

        </Container>
    )
}