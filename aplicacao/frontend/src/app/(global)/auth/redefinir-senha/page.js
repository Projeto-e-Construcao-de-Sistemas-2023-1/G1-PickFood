'use client';

import Form from "@/components/Form";
import TituloPagina from "@/components/TituloPagina";
import { mensagens } from "@/erros/mensagens";
import { buscarClientePorEmail, redefinirSenhaCliente } from "@/services/cliente";
import { buscarRestaurantePorEmail, redefinirSenhaRestaurante } from "@/services/restaurante";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const RedefinirSenha = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const router = useRouter();
    const searchParams = useSearchParams();

    const enviar = (data) => {

        const { senha } = data;
        const email = searchParams.get("q");
        
        console.log(email);
        console.log(senha);

        let restaurante = buscarRestaurantePorEmail(email);;
        let cliente = buscarClientePorEmail(email);

        if (cliente !== null) {
            redefinirSenhaCliente(cliente.id, senha);
        } else {
            redefinirSenhaRestaurante(restaurante.id, senha);
        }

        router.push("/auth/login");
    }

    return (
        <>
            <TituloPagina textAlign="center">Redefinir Senha</TituloPagina>
            <Form onSubmit={ handleSubmit(enviar) }>
                <Form.Erros erros={ errors }/>

                <Form.Field>
                    <Form.Label>Nova senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...register("senha", { 
                            required: mensagens.required("Nova senha"), 
                            minLength: { message: mensagens.minLength("Nova senha", 8), value: 8}
                        }) }} 
                        type={ "password" }/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Confirmar nova senha</Form.Label>
                    <Form.Input 
                        registrar={{ ...register("confirmacao_senha", { 
                            required: mensagens.required("Confirmar nova senha"), 
                            validate: (value) => {
                                const senha = watch("senha");

                                if (senha !== value) {
                                    return "As senhas nao coincidem"
                                }

                                return true;
                        } }) }} 
                        type={ "password" }/>
                </Form.Field>

                <Form.Button>Enviar</Form.Button>
            </Form>
        </>
    )
}

export default RedefinirSenha;