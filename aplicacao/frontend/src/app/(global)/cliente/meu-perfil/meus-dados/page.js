'use client'

import Form from "@/components/Form";
import { tituloPagina } from "@/styles/componentes.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts";
import { useForm } from "react-hook-form";

export default function MeusDados() {

    const { usuario } = useContext(AuthContext);

    const {
      register,
      handleSubmit,
      formState: { errors },
      setValue
    } = useForm();
  
    useEffect(() => {
      const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  
      let userBuscado = {};
  
      for (const user of usuarios) {
        if (user.id === usuario.id) {
          userBuscado = user;
          break;
        }
      }
  
      setValue("nome", userBuscado.nome);
      setValue("email", userBuscado.email);
      setValue("cpf", userBuscado.cpf);
      setValue("telefone", userBuscado.telefone);
    }, [usuario.id, setValue]);
  
    const onSubmit = (data) => {
      console.log(data);
      alterar(data);
    };
  
    const alterar = (data) => {
      let usuariosJaCadastrados = JSON.parse(localStorage.getItem("usuarios"));
  
      let userBuscado = {};
      let indexBuscado = -1;
  
      for (const index in usuariosJaCadastrados) {
        if (usuariosJaCadastrados[index].id === usuario.id) {
          userBuscado = usuariosJaCadastrados[index];
          indexBuscado = index;
          break;
        }
      }
  
      userBuscado = {
        ...userBuscado,
        nome: data.nome,
        email: data.email,
        cpf: data.cpf,
        telefone: data.telefone
      };
  
      usuariosJaCadastrados.splice(indexBuscado, 1);
      localStorage.setItem("usuarios", JSON.stringify([userBuscado, ...usuariosJaCadastrados]));
    };
  
    return (
      <>
        <h2 className={tituloPagina}>Meus Dados</h2>
  
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Field>
            <Form.Label>Nome</Form.Label>
            <Form.Input {...register("nome", { required: true })} />
          </Form.Field>
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input {...register("email", { required: true })} />
          </Form.Field>
          <Form.Field>
            <Form.Label>Telefone</Form.Label>
            <Form.Input {...register("telefone", { required: true })} />
          </Form.Field>
          <Form.Field>
            <Form.Label>CPF</Form.Label>
            <Form.Input {...register("cpf", { required: true })} />
          </Form.Field>
  
          <Form.Button type="submit">Salvar alterações</Form.Button>
        </Form>
      </>
    );
  }