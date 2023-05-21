'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import { 
    logo, 
    divider,
    links, 
    link,
    center,
    arrow,
    botaoGoogle,
    containerInferior
} from "./styles.module.scss"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();

    const authenticate = () => {
        // request

        router.push("/cliente/home");
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

            <div className={ containerInferior }>
                <button className={ botaoGoogle }>
                    <Image src="/google.png" width={17} height={17}/>
                    Entrar com Google
                </button>

                <Link href={ "" } className={ [link, center].join(' ') }>Quero me tornar um parceiro</Link>
            </div>
        </Container>
    )
}