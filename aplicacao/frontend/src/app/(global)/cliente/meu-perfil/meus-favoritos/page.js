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
import Button from "@/components/Button";
import PratosFavPreview from "@/components/PratosFavPreview/PratosFav/PratoFav";
import RestaurantesFavPreview from "@/components/RestaurantesFavPreview";

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
           <PratosFavPreview></PratosFavPreview>
           <Link href={"cliente/meu-perfil/meus-favoritos/pratos"} className={ link }>
                <div className= { botao }>
                <Button>Exibir pedidos</Button>
                </div>
            </Link>

           <div className={ divider }></div>
            <h2 className={ titulo }>Restaurantes</h2>

           <RestaurantesFavPreview></RestaurantesFavPreview>
           <Link href={"cliente/meu-perfil/meus-favoritos/restaurantes"} className={ link }>
                <div className= { botao }>
                <Button>Exibir pedidos</Button>
                </div>
            </Link>
        </>
    )
}