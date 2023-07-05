'use client';

import { AuthContext } from "@/contexts";
import NavbarSuperior from "@/components/NavbarSuperior";
import Overlay from "@/components/Overlay";
import request from "@/services/axios";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarSuperiorCliente() {

    const [ativo, setAtivo] = useState(false);
    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    const logout = () => {

        localStorage.setItem("usuario", JSON.stringify({}))

        router.push("/auth/home");
    }

    // useEffect(() => {

    //     // request.get(`cliente/${usuario.id}`)
    //     //     .then((res) => {
    //     //         const dados = res.data;

    //     //         setNome(dados.nome);
    //     //     })
    //     //     .catch((err) => {

    //     //         setNome("Joelma");
    //     //     });
    // }, [usuario.id])

    return (
        <>
            <NavbarSuperior>
                <NavbarSuperior.Logo/>

                
                <NavbarSuperior.Botao onClick={ () => { setAtivo(prev => !prev) } }>
                    { usuario?.nome }
                </NavbarSuperior.Botao>


                <NavbarSuperior.Dropdown ativo={ ativo }>
                    <NavbarSuperior.LinkDropdown href={ "/cliente/meu-perfil" }>
                        <NavbarSuperior.IconeDropdown src="/icons/meu-perfil.svg"/>
                        <NavbarSuperior.LabelDropdown>Meu Perfil</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                    <NavbarSuperior.LinkDropdown href="/cliente/meus-pedidos">
                        <NavbarSuperior.IconeDropdown src="/icons/meus-pedidos.svg"/>
                        <NavbarSuperior.LabelDropdown>Meus Pedidos</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                    <NavbarSuperior.LinkDropdown onClick={() => logout()}>
                        <NavbarSuperior.IconeDropdown src="/icons/sair.svg"/>
                        <NavbarSuperior.LabelDropdown>Sair</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                </NavbarSuperior.Dropdown>

            </NavbarSuperior>
            <Overlay ativo={ ativo }/>
        </>
    )
}