'use client';
import Container from "@/components/Container";
import Form from "@/components/Form";
import { mensagens } from "@/erros/mensagens";
import Image from "next/image";
import { useForm } from "react-hook-form";
import {
    forms,
    imagem
} from "./styles.module.scss";
import { atualizarPrato, buscarPratoPorId } from "@/services/prato";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { buscarTodasRestricoes } from "@/services/restricao";
import { buscarPratosRestricoesPorPrato } from "@/services/prato_restricao";

export default function EditarPrato({ params: { id } }) {

    const router = useRouter();
    const [ativo, setAtivo] = useState(false);
    const [restricoes, setRestricoes] = useState([]);
    const [mostrarRestricoes, setMostrarRestricoes] = useState(false);

    const { register: registrar, handleSubmit: tratarFormulario, watch, formState: { errors: erros }, setValue, getValues } = useForm({
        defaultValues: async () => {

            const prato = buscarPratoPorId(id);
            const restricoesPrato = buscarPratosRestricoesPorPrato(id);

            let restricoesFormatadas = "";

            console.log(restricoesPrato);

            for (const restricaoPrato of restricoesPrato) {
                restricoesFormatadas += restricaoPrato.nome;

                if (restricoesPrato.indexOf(restricaoPrato) !== restricoesPrato.length - 1) {
                    restricoesFormatadas += ",";
                }
            }

            return {
                nome: prato.nome,
                tipo: prato.tipo,
                preco: prato.preco,
                descricao: prato.descricao,
                foto: prato.foto,
                restricoes: restricoesFormatadas
            }
        }
    });


    useEffect(() => {
        const restricoesExistentes = buscarTodasRestricoes();

        setRestricoes(restricoesExistentes);
    }, [])

    const imagemValida = /^https:\/\/[\w.-]+\/.*\.(jpg|png|jpeg)$/i;

    const editar = (data) => {

        if (typeof data.restricoes === "string") {
            data.restricoes = data.restricoes.split(",");
        }

        atualizarPrato(id, data);

        setAtivo(true);

        console.log(data);
    }

    return (
        <Container>
            <Retornar navigate={ () => router.back() } />
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
                    <Image
                        src={watch("imagem")}
                        width={120}
                        height={120}
                        style={{ objectFit: "cover" }}
                        className={imagem}
                        alt="."
                    />
                }

            <div className={forms}>
                <Form onSubmit={ tratarFormulario(editar) }> 

                <Form.Sucesso ativo={ ativo }>Perfil atualizado com sucesso</Form.Sucesso>
                    <Form.Erros erros={ erros } />

                    <Form.Field>
                        <Form.Label>Nome</Form.Label>
                        <Form.Input  type={ "text" } registrar={{ ...registrar("nome", {
                            required: mensagens.required("nome")
                        }) }}/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Input type={ "text" } registrar={{ ...registrar("tipo", {
                            required: mensagens.required("tipo")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Preço</Form.Label>
                        <Form.Input type={ "number" } registrar={{ ...registrar("preco", {
                            required: mensagens.required("preco")
                        }) }}/>
                    </Form.Field>
                
                    <Form.Field>
                        <Form.Label>Descrição</Form.Label>
                        <Form.Input  type={ "text" } registrar={{ ...registrar("descricao", {
                            required: mensagens.required("descricao")
                        }) }}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Link da imagem</Form.Label>
                        <Form.Input type={ "text" } registrar={{ ...registrar("foto") }}/>
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

                    <Form.Button >Continuar</Form.Button>
                    
                </Form>
            </div>
        </Container>
    )
}