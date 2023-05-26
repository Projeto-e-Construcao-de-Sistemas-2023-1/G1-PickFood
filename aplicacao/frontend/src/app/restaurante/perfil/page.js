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

  const handleEmail = () => {};


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
    setNomeFantasia(dados.nomeFantasia);
    setRestaurante(dados);
    setEmail(dados.email);
    setCnpj(dados.cnpj);
    setRazaoSocial(dados.razaoSocial);
    setHorarioAbertura(dados.horarioAbertura);
    setTaxaEntrega(dados.taxaEntrega);
    setTelefone(dados.telefone);
    setHorarioFechamento(dados.horarioFechamento);
    setCep(dados.cep)
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
            <Form.Input
              value={nomeFantasia}
              onChange={(e) => setNomeFantasia(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Razão Social</Form.Label>
            <Form.Input
              value={razaoSocial}
              onChange={(e) => setRazaoSocial(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>E-mail</Form.Label>
            <Form.Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Telefone</Form.Label>
            <Form.Input
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>CNPJ</Form.Label>
            <Form.Input
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Abertura</Form.Label>
            <Form.Input
              value={horarioAbertura}
              onChange={(e) => setHorarioAbertura(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Horário de Fechamento</Form.Label>
            <Form.Input
              value={horarioFechamento}
              onChange={(e) => setHorarioFechamento(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Taxa de Entrega</Form.Label>
            <Form.Input
              value={taxaEntrega}
              type="number"
              onChange={(e) => setTaxaEntrega(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Rua</Form.Label>
            <Form.Input value={rua} onChange={(e) => setRua(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Cep</Form.Label>
            <Form.Input value={cep} onChange={(e) => setCep(e.target.value)} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Número</Form.Label>
            <Form.Input
              value={numero}
              type="number"
              onChange={(e) => setNumero(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Complemento</Form.Label>
            <Form.Input
              value={complemento}
              onChange={(e) => setComplemento(e.target.value)}
            />
          </Form.Field>

          <Form.Field>
            <Form.Label>Bairro</Form.Label>
            <Form.Input
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            />
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
