'use client'
import { useContext, useState } from "react";
import { CadastroRestauranteContext } from "../layout";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "@/components/Form";
import {
  cadastrar,
  margin
} from "./styles.module.scss";

export default function CriarEndereco() {
  const router = useRouter();

  const [apelido, setApelido] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const handleApelido = (e) => {
    setApelido(e.target.value);
  }

  const handleCep = (e) => {
    setCep(e.target.value);
  }

  const handleBairro = (e) => {
    setBairro(e.target.value);
  }

  const handleRua = (e) => {
    setRua(e.target.value);
  }

  const handleNumero = (e) => {
    setNumero(e.target.value);
  }

  const handleComplemento = (e) => {
    setComplemento(e.target.value);
  }

  const handleEstado = (e) => {
    setEstado(e.target.value);
  }

  const handleCidade = (e) => {
    setCidade(e.target.value);
  }


  const handleCadastro = () => {
    const endereco = {
      apelido,
      cep,
      bairro,
      rua,
      numero,
      complemento,
      estado,
      cidade
    };

    const enderecosCadastrados = JSON.parse(localStorage.getItem("enderecos")) || [];
    const novoEnderecos = [...enderecosCadastrados, endereco];
    localStorage.setItem("enderecos", JSON.stringify(novoEnderecos));

    router.push("/cliente/meu-perfil/meus-enderecos");
    
  }

  return (
    <>
      <Form>
        <Form.Field>
          <Form.Label>Apelido</Form.Label>
          <Form.Input value={apelido} onChange={handleApelido} />
        </Form.Field>
        <Form.Field>
          <Form.Label>CEP</Form.Label>
          <Form.Input value={cep} onChange={handleCep} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Bairro</Form.Label>
          <Form.Input value={bairro} onChange={handleBairro} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Rua</Form.Label>
          <Form.Input value={rua} onChange={handleRua} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Número</Form.Label>
          <Form.Input value={numero} onChange={handleNumero} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Complemento</Form.Label>
          <Form.Input value={complemento} onChange={handleComplemento} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Estado</Form.Label>
          <Form.Input value={estado} onChange={handleEstado} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Cidade</Form.Label>
          <Form.Input value={cidade} onChange={handleCidade} />
        </Form.Field>
        
        <div className={margin}>
          <Link href="/cliente/meu-perfil/meus-enderecos">
            <Form.Button onClick={handleCadastro}>Salvar alterações</Form.Button>
          </Link>
        </div>
      </Form>
    </>
  );
}