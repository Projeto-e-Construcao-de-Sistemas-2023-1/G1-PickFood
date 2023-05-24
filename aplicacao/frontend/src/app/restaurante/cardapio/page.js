'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Pesquisa from "@/components/Pesquisa";

import { 
    titulo,
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import { useState } from "react";

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
            
            <h2 className= { titulo }>Cardápio</h2>

            <CardapioRestaurante/>

        </>
    )
}