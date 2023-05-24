'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import Image from "next/image";
=======
import { useState } from "react";
>>>>>>> 7a0eb19ffb0338b9d65ba947864ea07f711f6e3a

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
            
            <h2 className= { titulo }>Cardápio</h2>

            <CardapioRestaurante/>

        </>
    )
}