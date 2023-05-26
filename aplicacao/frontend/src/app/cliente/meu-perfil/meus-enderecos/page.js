'use client';

import Enderecos from "@/components/Enderecos";
import Link from "next/link";

import { 
    titulo,
    adicionar,
    link
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MeusEnderecos() {

    const router = useRouter();      

    return (
        <>
            <h2 className= { titulo }>Meus Endereços
                <Link href={ "/cliente/meu-perfil/meus-enderecos/criar-endereco" } className={ link }>
                    <Image className= { adicionar }
                        src="/icons/adicionar.svg"
                        width={ 21 }
                        height={ 21 }
                        alt="Icone de círculo com um + no centro."
                    /> 
                </Link>  
            </h2>

           <Enderecos/>  
        </>
    )
}