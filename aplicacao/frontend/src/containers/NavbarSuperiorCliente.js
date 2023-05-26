'use client';

import { AuthContext } from "@/app/layout";
import NavbarSuperior from "@/components/NavbarSuperior";
import Overlay from "@/components/Overlay";
import request from "@/services/axios";
import { useContext, useEffect, useState } from "react";

export default function NavbarSuperiorCliente() {

    const [ativo, setAtivo] = useState(false);
    const [nome, setNome] = useState("");
    const { usuario } = useContext(AuthContext);

    useEffect(() => {

        request.get(`cliente/${usuario.id}`)
            .then((res) => {
                const dados = res.data;

                setNome(dados.nome);
            })
            .catch((err) => {

                setNome("Joelma");
            });
    }, [usuario.id])

    return (
        <>
            <NavbarSuperior>
                <NavbarSuperior.Logo/>

                
                <NavbarSuperior.Botao onClick={ () => { setAtivo(prev => !prev) } }>
                    { nome }
                </NavbarSuperior.Botao>


                <NavbarSuperior.Dropdown ativo={ ativo }>
                    <NavbarSuperior.LinkDropdown href={ "/cliente/meu-perfil" }>
                        <NavbarSuperior.IconeDropdown src="/icons/meu-perfil.svg"/>
                        <NavbarSuperior.LabelDropdown>Meu Perfil</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                    <NavbarSuperior.LinkDropdown href="">
                        <NavbarSuperior.IconeDropdown src="/icons/meus-pedidos.svg"/>
                        <NavbarSuperior.LabelDropdown>Meus Pedidos</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                    <NavbarSuperior.LinkDropdown href="/auth/login">
                        <NavbarSuperior.IconeDropdown src="/icons/sair.svg"/>
                        <NavbarSuperior.LabelDropdown>Sair</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                </NavbarSuperior.Dropdown>

            </NavbarSuperior>
            <Overlay ativo={ ativo }/>
        </>
    )
}