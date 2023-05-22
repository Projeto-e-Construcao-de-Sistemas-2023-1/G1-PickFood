import Form from "@/components/form";
import Container from "@/components/Container";
import Image from "next/image";
import { 
    logo, 
    divider,
    links, 
    link,
    center,
    arrow
} from "./styles.module.scss"
import Link from "next/link";

export default function Login() {

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
            <Image 
                src="/logo.svg" 
                width={ 57 } 
                height={ 31 }
                alt="Logo do PickFood. Consiste na palavra 'PickFood' sobrepondo dois circulos: um verde claro e outro verde escuro."
                className={ logo }
            />
            <Form>
                <Form.Field>
                    <Form.Label>Email</Form.Label>
                    <Form.Input/>
                </Form.Field>
                
                <Form.Field>
                    <Form.Label>Senha</Form.Label>
                    <Form.Input/>
                </Form.Field>

                <Form.Button onClick={ () => authenticate() }>Entrar</Form.Button>
            </Form>

            <div className={ links }>
                <Link href={ "" } className={ link }>Esqueci minha senha</Link>
                <Link href={ "" } className={ link }>Criar conta</Link>
            </div>

            <div className={ divider }></div>

            <Link href={ "" } className={ [link, center].join(' ') }>Quero me tornar um parceiro</Link>
        </Container>
    )
}