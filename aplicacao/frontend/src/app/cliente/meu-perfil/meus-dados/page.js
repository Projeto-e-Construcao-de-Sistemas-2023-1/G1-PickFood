import Form from "@/components/form";
import { tituloPagina } from "../../../../styles/componentes.module.scss";

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
                <Form.Button>Salvar alterações</Form.Button>
            </Form>
        </>
    )
}