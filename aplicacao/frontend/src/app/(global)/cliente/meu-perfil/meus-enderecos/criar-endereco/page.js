'use client';

import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "@/components/Form";
import {
  margin
} from "./styles.module.scss";
import { useForm } from "react-hook-form";
import rotas from "@/rotas";
import { mensagens } from "@/erros/mensagens";
import { criarEndereco } from "@/services/endereco";
import { AuthContext } from "@/contexts";

import axios from "axios";

export default function CriarEndereco() {
  
  

  const router = useRouter();

  const { register: registrar, handleSubmit: tratarFormulario, formState: { errors: erros } , setValue} = useForm();
  const { usuario } = useContext(AuthContext);

  const cadastrar = (data) => {
    
    console.log(data);

    criarEndereco({
      idCliente: usuario.id,
      ...data
    });

    // const enderecosCadastrados = JSON.parse(localStorage.getItem("enderecos")) || [];
    // const novoEnderecos = [...enderecosCadastrados, endereco];
    // localStorage.setItem("enderecos", JSON.stringify(novoEnderecos));

    router.push(rotas.cliente.meu_perfil.meus_enderecos.url());
    
  }
  // useEffect(() => {
  //   axios.get(`http://127.0.0.1:5000/consulta-cep/21031780`).then(res => console.log(res.data))
  // });

  useEffect(() => {
    const buscarDadosEndereco = async (cep) => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/consulta-cep/${cep}`);
        const { data } = response;
        
        setValue("bairro", data.bairro);
        setValue("rua", data.rua);
        setValue("estado", data.estado);
        setValue("cidade", data.cidade);
      } catch (error) {
        console.error(error);
      }
    };

    const handleCepChange = (event) => {
      const cep = event.target.value;
      if (cep.length === 8) {
        buscarDadosEndereco(cep);
      }
    };

    registrar("cep", {
      required: mensagens.required("cep"),
      minLength: { message: mensagens.minLength("cep", 8), value: 8 },
      onChange: handleCepChange
    });
  }, [registrar, setValue]);



  return (
    <>
      <Form onSubmit={ tratarFormulario(cadastrar) }>
        <Form.Erros erros={ erros } />

        <Form.Field>
          <Form.Label>Apelido</Form.Label>
          <Form.Input registrar={{ ...registrar("apelido", { required: mensagens.required("apelido") }) }} type={ "text" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>CEP</Form.Label>
          <Form.Input registrar={{ ...registrar("cep", { 
              required: mensagens.required("cep"),
              minLength: { message: mensagens.minLength("cep", 8), value: 8 },
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
            }) }} type={ "text" }/>
        </Form.Field> 

        <Form.Field>
          <Form.Label>Bairro</Form.Label>
          <Form.Input registrar={{ ...registrar("bairro", { required: mensagens.required("bairro") }) }} type={ "text" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>Rua</Form.Label>
          <Form.Input registrar={{ ...registrar("rua", { required: mensagens.required("rua") }) }} type={ "text" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>Número</Form.Label>
          <Form.Input registrar={{ ...registrar("numero", { required: mensagens.required("numero") }) }} type={ "number" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>Complemento</Form.Label>
          <Form.Input registrar={{ ...registrar("complemento") }} type={ "text" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>Estado</Form.Label>
          <Form.Input registrar={{ ...registrar("estado", { required: mensagens.required("estado") }) }} type={ "text" }/>
        </Form.Field>

        <Form.Field>
          <Form.Label>Cidade</Form.Label>
          <Form.Input registrar={{ ...registrar("cidade", { required: mensagens.required("cidade")}) }} type={ "text"} />
        </Form.Field>
        
        <div className={margin}>
          <Form.Button>Salvar alterações</Form.Button>
        </div>
      </Form>
    </>
  );
}