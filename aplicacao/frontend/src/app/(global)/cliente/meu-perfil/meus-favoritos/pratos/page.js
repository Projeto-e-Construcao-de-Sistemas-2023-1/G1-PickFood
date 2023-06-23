'use client';

import Form from "@/components/Form";
import Image from "next/image";
import Link from "next/link";
import {
    divider,
    titulo,
    link,
    botao
} from "./styles.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { excluirCliente } from "@/services/cliente";
import PratosFav from "@/components/PratosFav/PratoFav";
import Button from "@/components/Button";

export default function MeusFavoritos() {


    const [ativo, setAtivo] = useState(false);

    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    const excluir = () => {
        
        excluirCliente(usuario.id);

        router.push("/auth/login");
    }

    return(
        <>
            <h2 className={ titulo }>Pratos</h2>
           <PratosFav></PratosFav>
        </>
    )
}