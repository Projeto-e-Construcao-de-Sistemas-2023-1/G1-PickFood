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
import { useContext, useEffect, useState } from "react";
import { buscarEnderecosPorCliente } from "@/services/endereco";
import { AuthContext } from "@/contexts";

export default function MeusEnderecos() {

    const [enderecos, setEnderecos] = useState([]);
    const { usuario } = useContext(AuthContext);

    useEffect(() => {

        const enderecosExistentes = buscarEnderecosPorCliente(usuario.id);

        console.log(enderecosExistentes);

        setEnderecos(enderecosExistentes);

    }, [usuario.id])

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

           <Enderecos enderecos={ enderecos }/>  
        </>
    )
}