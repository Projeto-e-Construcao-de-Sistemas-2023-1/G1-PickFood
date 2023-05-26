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
import { useRouter } from "next/navigation";
import { CadastroRestauranteContext } from "../layout";

export default function Cadastro2() {

    const { dados, definirDados } = useContext(CadastroRestauranteContext);

    const router = useRouter();

    const [telefone, setTelefone] = useState("");
    const [taxaEntrega, setTaxaEntrega] = useState("");
    const [horarioFuncionamento, setHorarioFuncionamento] = useState("");

    const handleTelefone = (e) => {

        setTelefone(e.target.value);
    }

    const handleTaxaEntrega = (e) => {

        setTaxaEntrega(e.target.value);
    } 

    const handleHorarioFuncionament = (e) => {

        setHorarioFuncionamento(e.target.value);
    }

    const cadastrar = () => {

        definirDados({
            ...dados,
            telefone,
            taxaEntrega,
            horarioFuncionamento
        });

        router.push("/auth/restaurante/cadastro3");
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro1"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>

            <Logo className={ logo }/>
            
            <h2 className={ [center, title].join(' ') }>Informações Adicionais</h2>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>DDD + Número</Form.Label>
                    <Form.Input value={ telefone } onChange={ handleTelefone }/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Horário de Funcionamento</Form.Label>
                    <Form.Input value={ horarioFuncionamento } onChange={ handleHorarioFuncionament }/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Taxa de Entrega</Form.Label>
                    <Form.Input value={ taxaEntrega } type={"number"} onChange={ handleTaxaEntrega }/>
                </Form.Field>
                
                <Form.Button onClick={ cadastrar }>Continuar</Form.Button>
                
                
            </Form>
            </div>

        </Container>
    )
}