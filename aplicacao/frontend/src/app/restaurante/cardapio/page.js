'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {

    const router = useRouter();

    const authenticate = (e) => {
        e.preventDefault();

        // request
     
        router.push("/cliente/home");
    }         

    return (
        <>
            <Pesquisa/> 
            <Image className= { adicionar }
                src="/icons/adicionar.svg"
                width={ 21 }
                height={ 21 }
                alt="Icone de círculo com um + no centro."
            /> 

            <div className= { titulo }>Cardápio</div>

            <CardapioRestaurante/>

        </>
    )
}