'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { 
    title,
    center,
    forms,
    arrow,
    logo
} from "./styles.module.scss"
import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { CadastroRestauranteContext } from "../layout";
import { AuthContext } from "@/app/layout";
import { useRouter } from "next/navigation";

export default function Cadastro3() {

    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    const { dados } = useContext(CadastroRestauranteContext);

    const { definirUsuario } = useContext(AuthContext);

    const router = useRouter()

    const handleCep = (e) => {
        setCep(e.target.value);
    }

    const handleRua = (e) => {
        setRua(e.target.value);
    }

    const handleBairro = (e) => {
        setBairro(e.target.value);
    }

    const handleNumero = (e) => {
        setNumero(e.target.value);
    }

    const handleComplemento = (e) => {
        setComplemento(e.target.value);
    }

    const cadastrar = () => {
        const id = uuid();

        const { razaoSocial, nomeFantasia, email, senha, cnpj, telefone, horarioFuncionamento, taxaEntrega } = dados;


        const user = {
            id, 
            nome: nomeFantasia,
            email,
        } 


        const dadosRestaurante = {
            id,
            razaoSocial,
            email,
            senha,
            cnpj,
            telefone,
            horarioFuncionamento,
            nomeFantasia,
            taxaEntrega,
            tipo: "restaurante"
        }

        const restaurantesJaCadastratos = JSON.parse(localStorage.getItem("usuarios"));

        if (restaurantesJaCadastratos === null || restaurantesJaCadastratos.length === 0) {
            localStorage.setItem("usuarios", JSON.stringify([dadosRestaurante]))
        } else {
            localStorage.setItem("usuarios", JSON.stringify([dadosRestaurante, ...restaurantesJaCadastratos]))
        }
        
        definirUsuario(user);

        
        router.push("/restaurante/home");
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro2"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>
            
            <Logo className={ logo }/>

            <h2 className={ [center, title].join(' ') }>Informações de Endereço</h2>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>CEP</Form.Label>
                    <Form.Input value={ cep } onChange={ handleCep }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Bairro</Form.Label>
                    <Form.Input value={ bairro } onChange={ handleBairro }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Rua</Form.Label>
                    <Form.Input value={ rua } onChange={ handleRua }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Número</Form.Label>
                    <Form.Input value={ numero } onChange={ handleNumero }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Complemento</Form.Label>
                    <Form.Input value={ complemento } onChange={ handleComplemento }/>
                </Form.Field>

                <Form.Button onClick={ cadastrar }>Continuar</Form.Button>
                
            </Form>
            </div>

        </Container>
    )
}