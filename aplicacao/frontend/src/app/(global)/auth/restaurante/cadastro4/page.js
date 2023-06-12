'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import { mensagens } from "@/erros/mensagens";
import { useForm } from "react-hook-form";

import { 
    center,
    title,
    checkbox,
    checkboxes,
    arrow,
    logo,
    link
} from "./styles.module.scss"

export default function Cadastro4() {

    const router = useRouter();

    const { register, handleSubmit: submit, formState: { errors } } = useForm();

    const handleSubmit = (data) => {

        const { restricao, id } = data;

        console.log(data);

        definirDados({
            ...dados,
        });

        router.push("/restaurante/home");
    }

    return (
        <Container>
            <Link href={"auth/restaurante/cadastro3"}>
                <Image
                src="/icons/back.svg"
                width={ 21 }
                height={ 21 }
                className={ arrow }
                alt="Icone de seta apontando para trás."
                />
            </Link>
            
            <Logo className={ logo }/>
            
            <TituloPagina>Risco de Contaminação Cruzada</TituloPagina>

                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros = { errors }/>
                    <div className={ checkboxes }>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="a"/>
                        <label for="a">Restrição #1</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="b"/>
                        <label for="b">Restrição #2</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="c"/>
                        <label for="c">Restrição #3</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="d"/>
                        <label for="d">Restrição #4</label>
                    </div>
                    <div className={checkbox}>
                         <input type= "checkbox" name ="e"/>
                        <label for="e">Restrição #5</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="f"/>
                        <label for="f">Restrição #6</label>
                        </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="g"/>
                        <label for="g">Restrição #7</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="h"/>
                        <label for="h">Restrição #8</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="i"/>
                        <label for="i">Restrição #9</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="j"/>
                        <label for="j">Restrição #10</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="k"/>
                        <label for="k">Restrição #11</label>
                    </div>
                    <div className={checkbox}>
                        <input type= "checkbox" name ="h"/>
                        <label for="l">Restrição #12</label>
                    </div> 
                </div>

                <Link href={"restaurante/home"} className={ "link" }>
                    <Form.Button type="submit">Continuar</Form.Button>
                </Link>
 
                </Form>
                              
           

        </Container>
    )
}