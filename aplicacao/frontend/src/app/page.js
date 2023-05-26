'use client';

import {
    titulo,
    banner,
    texto,
} from "./styles.module.scss";
import NavbarSuperior from "@/components/NavbarSuperior";
import Link from "next/link";

export default function LandingPage() {

    return(
        <>
        <NavbarSuperior>
            <NavbarSuperior.Logo/>
            <Link href= { "auth/login" }>
                <NavbarSuperior.Botao>
                Entrar
                </NavbarSuperior.Botao>
            </Link> 
        </NavbarSuperior>

            <div className={ banner }>
                <div className= { texto }>Bem Vindo ao PickFood!</div>
            </div>
            <h2 className={ titulo }>Somos uma plataforma que busca atender aum</h2>
        </>
    )
}
