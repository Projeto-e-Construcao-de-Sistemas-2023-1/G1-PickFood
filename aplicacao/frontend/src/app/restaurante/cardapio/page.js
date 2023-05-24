'use client';

import CardapioRestaurante from "@/components/CardapioRestaurante";
import Pesquisa from "@/components/Pesquisa";
import Image from "next/image";

import { 
    divider,
    titulo,
    botao,
} from "./styles.module.scss"
import { useRouter } from "next/navigation";

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

            <div className= { titulo } >Cardápio</div>

            <CardapioRestaurante/>

        </>
    )
}