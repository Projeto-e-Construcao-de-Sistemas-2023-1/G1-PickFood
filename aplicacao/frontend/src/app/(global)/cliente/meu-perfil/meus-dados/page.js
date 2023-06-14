'use client'

import Form from "@/components/Form";
import { tituloPagina } from "@/styles/componentes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts";
import { useForm } from "react-hook-form";
import { mensagens } from "@/erros/mensagens";
import TituloPagina from "@/components/TituloPagina";

export default function MeusDados() {

  const { usuario } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors: erros },
  } = useForm();

  // useEffect(() => {
  //   const usuarios = JSON.parse(localStorage.getItem("usuarios"));

  //   let userBuscado = {};

  //   for (const user of usuarios) {
  //     if (user.id === usuario.id) {
  //       userBuscado = user;
  //       break;
  //     }
  //   }

  //   setValue("nome", userBuscado.nome);
  //   setValue("email", userBuscado.email);
  //   setValue("cpf", userBuscado.cpf);
  //   setValue("telefone", userBuscado.telefone);
  // }, [usuario.id, setValue]);

  useEffect(() => {
    console.log(erros);
  })

  const alterar = (data) => {

    console.log(data);
    // let usuariosJaCadastrados = JSON.parse(localStorage.getItem("usuarios"));

    // let userBuscado = {};
    // let indexBuscado = -1;

    // for (const index in usuariosJaCadastrados) {
    //   if (usuariosJaCadastrados[index].id === usuario.id) {
    //     userBuscado = usuariosJaCadastrados[index];
    //     indexBuscado = index;
    //     break;
    //   }
    // }

    // userBuscado = {
    //   ...userBuscado,
    //   nome: data.nome,
    //   email: data.email,
    //   cpf: data.cpf,
    //   telefone: data.telefone
    // };

    // usuariosJaCadastrados.splice(indexBuscado, 1);
    // localStorage.setItem("usuarios", JSON.stringify([userBuscado, ...usuariosJaCadastrados]));
  };

  return (
    <>

    <TituloPagina>Meus Dados</TituloPagina>

      <Form onSubmit={handleSubmit(alterar)}>

        <Form.Erros erros={erros} />

        <Form.Field>
          <Form.Label>Nome</Form.Label>
          <Form.Input type={"text"} registrar={{
            ...register("nome",
              {
                required: mensagens.required("Nome"), minLength:
                  { message: mensagens.minLength("Nome", 3), value: 3 }
              })
          }} />
        </Form.Field>
        <Form.Field>
          <Form.Label>E-mail</Form.Label>
          <Form.Input type={"email"} registrar={{
            ...register("email",
              { required: mensagens.required("E-mail") })
          }} />
        </Form.Field>
        <Form.Field>
          <Form.Label>Telefone</Form.Label>
          <Form.Input type={"text"} registrar={{
            ...register("telefone",
              {
                required: mensagens.required("Telefone"),
                minLength: { message: mensagens.minLength("Telefone", 11), value: 11 },
                onChange: (e) => {

                  const valor = e.target.value;

                  const apenasNumeros = /^\d+$/;

                  for (const indice in valor) {
                    if (!apenasNumeros.test(valor[indice])) {
                      e.target.value = valor.substring(0, indice);
                    }
                  }

                  if (valor.length > 11) {
                    e.target.value = valor.substring(0, 11);
                  }
                }
              })
          }} />
        </Form.Field>
        <Form.Field>
          <Form.Label>CPF</Form.Label>
          <Form.Input type={"text"} registrar={{
            ...register("cpf",
              {
                required: mensagens.required("CPF"),
                minLength: { message: mensagens.minLength("CPF", 11), value: 11 },
                onChange: (e) => {
                  const valor = e.target.value;

                  const apenasNumeros = /^\d+$/;

                  for (const indice in valor) {
                    if (!apenasNumeros.test(valor[indice])) {
                      e.target.value = valor.substring(0, indice);
                    }
                  }

                  if (valor.length > 11) {
                    e.target.value = valor.substring(0, 11);
                  }
                }
              })
          }} />
        </Form.Field>

        <Form.Button type="submit">Salvar alterações</Form.Button>
      </Form>
    </>
  );
}