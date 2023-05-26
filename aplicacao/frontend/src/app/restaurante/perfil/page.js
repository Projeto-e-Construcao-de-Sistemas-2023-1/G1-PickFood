'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Link from "next/link";
import { 
    title,
    center,
    forms,
    excluirConta,
    textoExcluirConta,
    opcoes,
    link
} from "./styles.module.scss"
import Modal from "@/components/Modal";
import { useContext, useEffect, useState } from "react";
import request from "@/services/axios";
import { AuthContext } from "@/app/layout";

export default function RestaurantePerfil() {

    const [ativo, setAtivo] = useState(false);

    const { usuario } = useContext(AuthContext);

    const [restaurante, setRestaurante] = useState({});


    const [email, setEmail] = useState("");
    const [nomeFantasia, setNomeFantasia] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [razaoSocial, setRazaoSocial] = useState("");
    const [horarioAbertura, setHorarioAbertura] = useState("");
    const [horarioFechamento, setHorarioFechamento] = useState("");
    const [taxaEntrega, setTaxaEntrega] = useState(0);
    const [rua, setRua] = useState("");
    const [cep, setCep] = useState("");
    const [telefone, setTelefone] = useState("");
    const [numero, setNumero] = useState(0);
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");

    const handleEmail = () => {

    }

    useEffect(() => {

        request.get(`restaurante/${usuario.id}`)
            .then((res) => {
                const dados = res.data;

                console.log(dados);

                setRestaurante(dados);
            })
            .catch((err) => {
                console.error(err);
            })
    })

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
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Input value={ nomeFantasia }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Input value={ razaoSocial }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Input value={ email }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Telefone</Form.Label>
                        <Form.Input value={ telefone }/>
                    </Form.Field>
                    
                    <Form.Field>
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Input value={ cnpj }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Horário de Abertura</Form.Label>
                        <Form.Input value={ horarioAbertura }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Horário de Fechamento</Form.Label>
                        <Form.Input value={ horarioFechamento }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Taxa de Entrega</Form.Label>
                        <Form.Input value={ taxaEntrega } type={ "number" }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Rua</Form.Label>
                        <Form.Input value={ rua }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Cep</Form.Label>
                        <Form.Input value={ cep }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Número</Form.Label>
                        <Form.Input value={ numero } type={"number"}/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Complemento</Form.Label>
                        <Form.Input value={ complemento }/>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>Bairro</Form.Label>
                        <Form.Input value={ bairro }/>
                    </Form.Field>

                    <div className={ opcoes }>
                        <Form.Button>Salvar alterações</Form.Button>
                            <div className={ excluirConta } onClick={ () => { setAtivo(prev => !prev) } }>
                                <div className={ textoExcluirConta }>Excluir conta</div>
                            </div>
                    </div>
                </Form>
            </div>
        </Container>
    )
}