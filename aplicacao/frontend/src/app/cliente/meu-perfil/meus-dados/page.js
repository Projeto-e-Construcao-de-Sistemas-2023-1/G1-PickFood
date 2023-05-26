import Form from "@/components/Form";
import { tituloPagina } from "../../../../styles/componentes.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MeusDados() {
    return(
        <>
            <h2 className={ tituloPagina }>Meus Dados</h2>
            <Form>
                <Form.Field>
                    <Form.Label>Nome</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Form.Field>
                    <Form.Label>CPF</Form.Label>
                    <Form.Input/>
                </Form.Field>
                <Link href={ "/cliente/meu-perfil" }>
                    <Form.Button>Salvar alterações</Form.Button>
                </Link>
                
            </Form>
        </>
    )
}