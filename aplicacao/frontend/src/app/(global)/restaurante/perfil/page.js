"use client";

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
  link,
} from "./styles.module.scss";

import Modal from "@/components/Modal";
import { useContext, useEffect, useState } from "react";
import request from "@/services/axios";
import { AuthContext } from "@/contexts";
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";
import TituloPagina from "@/components/TituloPagina";

export default function RestaurantePerfil() {

  const [ativo, setAtivo] = useState(false);

  const { usuario } = useContext(AuthContext);

  const { register, handleSubmit: tratarFormulario, formState: { errors: erros },} = useForm();

  const alterar = (data) => {

    console.log(data);
    // request.put("restaurante", {
    //   id: usuario.id,
    //   nome_fantasia: nomeFantasia,
    //   user: {
    //     email: email,
    //   },
    //   cnpj: cnpj,
    //   razao_social: razaoSocial,
    //   horario_abertura: horarioAbertura,
    //   horario_fechamento: horarioFechamento,
    //   taxa_entrega: taxaEntrega,
    //   telefone: telefone,
    //   endereco: {
    //     rua: rua,
    //     numero: numero,
    //     complemento: complemento,
    //     bairro: bairro,
    //     cep: cep,
    //   },
    // });
  };

  //const handleEmail = () => {};


  // useEffect(() => {
    
  //   // const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  //   // let dados = {};
  //   // console.log(usuarios);
  //   // for (const user of usuarios) {
  //   //   if (user.id === usuario.id) {
  //   //     dados = user;
  //   //     break;
  //   //   }
  //   // }
  //  // setNomeFantasia(dados.nomeFantasia);
  //  // setRestaurante(dados);
  //  // setEmail(dados.email);
  //  // setCnpj(dados.cnpj);
  //  // setRazaoSocial(dados.razaoSocial);
  //  // setHorarioAbertura(dados.horarioAbertura);
  // //  setTaxaEntrega(dados.taxaEntrega);
  // //  setTelefone(dados.telefone);
  // //  setHorarioFechamento(dados.horarioFechamento);
  // //  setCep(dados.cep)
  // }, []);

  return (
    <Container>
      <Modal ativo={ativo}>
        <Modal.Cabecalho>
          <Modal.Icone svg="/icons/aviso.svg" />
          <Modal.Titulo>Tem certeza que deseja excluir sua conta?</Modal.Titulo>
        </Modal.Cabecalho>

        <Modal.Rodape>
          <Modal.BotaoConfirmar />
          <Modal.BotaoCancelar onClick={() => setAtivo(false)} />
        </Modal.Rodape>
      </Modal>

      <TituloPagina>Meus dados</TituloPagina>

      <div className={forms}>
        <Form onSubmit={ tratarFormulario(alterar) }>

          <Form.Erros erros={ erros } />

          <Form.Field>
            <Form.Label>Nome Fantasia</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("nomeFantasia", { required: mensagens.required("Nome Fantasia") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Razão Social</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("razaoSocial", { required: mensagens.required("Razão Social") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>E-mail</Form.Label>
            <Form.Input type={"email"} registrar={{ ...register("email", { required: mensagens.required("Email") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Telefone</Form.Label>
            <Form.Input type={"tel"} registrar={{ ...register("telefone", { required: mensagens.required("Telefone") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>CNPJ</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("cnpj", { 
              required: mensagens.required("CNPJ"),
              minLength: { message: mensagens.minLength("cnpj", 14), value: 14}, 
              onChange: (e) => {
                  const valor = e.target.value;
                  
                  const apenasNumeros = /^\d+$/;

                  for (const indice in valor) {
                      if (!apenasNumeros.test(valor[indice])) {
                          e.target.value = valor.substring(0, indice);
                      }
                  }

                  if (valor.length > 14) {
                      e.target.value = valor.substring(0, 14);
                  }
              }
            }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Abertura</Form.Label>
            <Form.Input type={"time"} registrar={{ ...register("horarioAbertura", { required: mensagens.required("Horário de Abertura") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Fechamento</Form.Label>
            <Form.Input type={"time"} registrar={{ ...register("horarioFechamento", { required: mensagens.required("Horário de Fechamento") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Taxa de Entrega</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("taxaEntrega", { required: mensagens.required("Taxa de Entrega") })  }} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Rua</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("rua", { required: mensagens.required("Rua") }) }} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Cep</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("cep", {
              required: mensagens.required("Cep"),
              minLength: { message: mensagens.minLength("Cep", 8), value: 8 },
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
            }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Número</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("numero", { required: mensagens.required("Número") }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Complemento</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("complemento") }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Bairro</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("bairro", { required: mensagens.required("Bairro") }) }}/>
          </Form.Field>

          <div className={opcoes}>
            <Form.Button>Salvar alterações</Form.Button>
            <div
              className={excluirConta}
              onClick={() => {
                setAtivo((prev) => !prev);
              }}
            >
              <div className={textoExcluirConta}>Excluir conta</div>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
}
