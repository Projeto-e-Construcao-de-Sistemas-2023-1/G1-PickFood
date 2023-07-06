'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import {
    forms,
    imagem
} from "./styles.module.scss"
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { mensagens } from "@/erros/mensagens";
import { criarPrato } from "@/services/prato";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { buscarTodasRestricoes } from "@/services/restricao";
import Select from "react-select";



function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function CriarPrato() {

    const { register: registrar, handleSubmit: tratarFormulario, watch,
        formState: { errors: erros }, setValue, getValues } = useForm();

    const { usuario } = useContext(AuthContext);
    const [restricoes, setRestricoes] = useState([]);
    const [mostrarRestricoes, setMostrarRestricoes] = useState(false);

    useEffect(() => {
        const restricoesExistentes = buscarTodasRestricoes();

        setRestricoes(restricoesExistentes);
    }, [])

    useEffect(() => {
        console.log(watch("restricoes"));
    }, [watch])

    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i;

    const router = useRouter();

    const criar = (data) => {
        console.log(data);

        if (typeof data.restricoes === "string") {
            data.restricoes = data.restricoes.split(",");
        }

        console.log(data);


        criarPrato({
            idRestaurante: usuario.id,
            ...data
        });

        router.push("/restaurante/cardapio");
    }

      
    // Falta só colocar o input de seleção de restrição
    return (
        <Container>
            {
                !imagemValida.test(watch("imagem")) ?
                    <Image
                        src={"/icons/foto.svg"}
                        width={87}
                        height={87}
                        className={imagem}

                        alt="."
                    />
                    :
                    <div>
                        <Image
                            src={watch("imagem")}
                            width={120}
                            height={120}
                            style={{ objectFit: "cover" }}
                            className={imagem}
                            alt="."
                        />
                    </div>
            }

            <Form onSubmit={tratarFormulario(criar)}>

                <Form.Erros erros={erros} />

                <Form.Field>
                    <Form.Label>Nome</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("nome",
                            { required: mensagens.required("Nome") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Tipo</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("tipo",
                            { required: mensagens.required("Tipo") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Preço</Form.Label>
                    <Form.Input type={"number"} registrar={{
                        ...registrar("preco",
                            { required: mensagens.required("Preço") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Input type={"text"} registrar={{
                        ...registrar("descricao",
                            { required: mensagens.required("Descrição") })
                    }} />
                </Form.Field>

                <Form.Field>
                    <Form.Label>Link da imagem</Form.Label>
                    <Form.Input registrar={{ ...registrar("foto") }} type={"text"}/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Restrições</Form.Label>
                    <Form.Input defaultValue={"Sem lactose"} registrar={{ ...registrar("restricoes") }} onClick={() => setMostrarRestricoes(prev => !prev)}/>

                    <Form.Select ativo={ mostrarRestricoes } onChange={ (e) => {
                        let restricoesSelecionadas = getValues("restricoes");

                        console.log(restricoesSelecionadas)
                        console.log(typeof restricoesSelecionadas);

                        if (typeof restricoesSelecionadas === "string" && restricoesSelecionadas !== "") {
                            restricoesSelecionadas = restricoesSelecionadas.split(",");
                        }

                        for (const restricaoSelecionada of restricoesSelecionadas) {
                            if (restricaoSelecionada === e.target.value) {
                                console.log("restriçao ja selecionada.");
                                return;
                            }
                        }
                        
                        setValue("restricoes", [...restricoesSelecionadas, e.target.value])
                        
                        }} multiple >
                            {
                                restricoes.map(restricao => {

                                    return (
                                        <Form.Option key={ restricao.id } value={ restricao.nome }>{ restricao.nome }</Form.Option>
                                    )
                                })
                            }
                    </Form.Select>
                </Form.Field>

                
            
                


                <Form.Button>Continuar</Form.Button>
            </Form>
        </Container>
    )
}