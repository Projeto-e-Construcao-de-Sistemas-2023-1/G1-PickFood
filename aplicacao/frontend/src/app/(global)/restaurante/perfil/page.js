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

export default function RestaurantePerfil() {

  const [ativo, setAtivo] = useState(false);

  const { usuario } = useContext(AuthContext);

  const { register,formState: { errors },} = useForm();

  const save = () => {
    request.put("restaurante", {
      id: usuario.id,
      nome_fantasia: nomeFantasia,
      user: {
        email: email,
      },
      cnpj: cnpj,
      razao_social: razaoSocial,
      horario_abertura: horarioAbertura,
      horario_fechamento: horarioFechamento,
      taxa_entrega: taxaEntrega,
      telefone: telefone,
      endereco: {
        rua: rua,
        numero: numero,
        complemento: complemento,
        bairro: bairro,
        cep: cep,
      },
    });
  };

  //const handleEmail = () => {};


  useEffect(() => {
    
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    let dados = {};
    console.log(usuarios);
    for (const user of usuarios) {
      if (user.id === usuario.id) {
        dados = user;
        break;
      }
    }
   // setNomeFantasia(dados.nomeFantasia);
   // setRestaurante(dados);
   // setEmail(dados.email);
   // setCnpj(dados.cnpj);
   // setRazaoSocial(dados.razaoSocial);
   // setHorarioAbertura(dados.horarioAbertura);
  //  setTaxaEntrega(dados.taxaEntrega);
  //  setTelefone(dados.telefone);
  //  setHorarioFechamento(dados.horarioFechamento);
  //  setCep(dados.cep)
  }, []);

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

      <h2 className={[center, title].join(" ")}>Minhas informações</h2>

      <div className={forms}>
        <Form>
          <Form.Field>
            <Form.Label>Nome Fantasia</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("nomeFantasia", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Razão Social</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("razaoSocial", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>E-mail</Form.Label>
            <Form.Input type={"email"} registrar={{ ...register("email", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Telefone</Form.Label>
            <Form.Input type={"tel"} registrar={{ ...register("telefone", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>CNPJ</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("cnpj", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Abertura</Form.Label>
            <Form.Input type={"time"} registrar={{ ...register("horarioAbertura", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Fechamento</Form.Label>
            <Form.Input type={"time"} registrar={{ ...register("horarioFechamento", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Taxa de Entrega</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("taxaEntrega", { required: true })  }} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Rua</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("rua", { required: true }) }} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Cep</Form.Label> 
            <Form.Input type={"number"} registrar={{ ...register("cep", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Número</Form.Label>
            <Form.Input type={"number"} registrar={{ ...register("numero", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Complemento</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("complemento", { required: true }) }}/>
          </Form.Field>

          <Form.Field>
            <Form.Label>Bairro</Form.Label>
            <Form.Input type={"text"} registrar={{ ...register("bairro", { required: true }) }}/>
          </Form.Field>

          <div className={opcoes}>
            <Form.Button onClick={save}>Salvar alterações</Form.Button>
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
