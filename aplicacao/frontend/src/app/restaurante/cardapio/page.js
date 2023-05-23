'use client';

import CardapioPreview from "@/components/CardapioPreview";
import Button from "@/components/Button";
import Pesquisa from "@/components/Pesquisa";

import { 
    divider,
    titulo,
    botao
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

            <CardapioPreview/>

            <div className= { botao }>
                <Button onClick={ authenticate }>Exibir cardápio</Button>
            </div>
            


            <div className={ divider }></div>

        </>
    )
}