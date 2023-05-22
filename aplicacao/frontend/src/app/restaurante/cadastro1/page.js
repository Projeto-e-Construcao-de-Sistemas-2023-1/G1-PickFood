import Form from "@/components/form";
import Container from "@/components/Container";
import Image from "next/image";
import { 
    title,
    center,
    forms,
    arrow
} from "./styles.module.scss"

export default function Cadastro1() {

    const authenticate = () => {
        // request
    }

    return (
        <Container>
            <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
            />

            <div className={ [center, title].join(' ') }>Informações do restaurante</div>

            <div className={forms}>
            <Form>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>Nome Fantasia</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Razão Social</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Field>
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Input/>
                </Form.Field>


                <Form.Button onClick={ () => authenticate() }>Continuar</Form.Button>
            </Form>
            </div>

        </Container>
    )
}