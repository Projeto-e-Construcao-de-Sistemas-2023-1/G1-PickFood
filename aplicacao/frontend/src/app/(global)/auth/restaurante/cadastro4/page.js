'use client';

import Form from "@/components/Form";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { 
    checkbox,
    checkboxes,
    arrow,
    logo,
    label,
    input
} from "./styles.module.scss"
import TituloPagina from "@/components/TituloPagina";

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
           
            
                <TituloPagina textAlign="center">Risco de Contaminação Cruzada</TituloPagina>

                <Form onSubmit={ submit(handleSubmit) }>
                    <Form.Erros erros = { errors }/>
                    <div className={ checkboxes }>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="a" className= { input }/>
                        <Form.Label for="a" className= { label }>Restrição #2</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="b" className= { input }/>
                        <Form.Label for="b" className= { label }>Restrição #3</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="c" className= { input }/>
                        <Form.Label for="c" className= { label }>Restrição #4</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="d" className= { input }/>
                        <Form.Label for="d" className= { label }>Restrição #5</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="e" className= { input }/>
                        <Form.Label for="e" className= { label }>Restrição #6</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="f" className= { input }/>
                        <Form.Label for="f" className= { label }>Restrição #7</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="g" className= { input }/>
                        <Form.Label for="g" className= { label }>Restrição #8</Form.Label>
                    </Form.Field>
                    <Form.Field className={checkbox}>
                        <Form.Input type= "checkbox" name ="h" className= { input }/>
                        <Form.Label for="h" className= { label }>Restrição #9</Form.Label>
                    </Form.Field>
                    
                </div>

                <Link href={"restaurante/home"} className={ "link" }>
                    <Form.Button type="submit">Continuar</Form.Button>
                </Link>
 
                </Form>
                              
           

        </Container>
    )
}