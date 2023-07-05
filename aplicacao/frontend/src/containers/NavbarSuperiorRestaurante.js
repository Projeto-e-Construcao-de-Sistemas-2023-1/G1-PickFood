'use client';

import NavbarSuperior from "@/components/NavbarSuperior";
import Overlay from "@/components/Overlay";
import { useContext, useState } from "react";
import { AuthContext } from "@/contexts";
import { useRouter } from "next/navigation";

export default function NavbarSuperiorRestaurnte() {

    const [ativo, setAtivo] = useState(false);
    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    const logout = () => {

        localStorage.setItem("usuario", JSON.stringify({}))

        router.push("/auth/home");
    }

    return (
        <>
            <NavbarSuperior>
                <NavbarSuperior.Logo/>

                
                <NavbarSuperior.Botao onClick={ () => { setAtivo(prev => !prev) } }>
                    { usuario?.nome }
                </NavbarSuperior.Botao>

                <NavbarSuperior.Dropdown ativo={ ativo }>

                    <NavbarSuperior.LinkDropdown href={ "/restaurante/perfil" } >
                        <NavbarSuperior.IconeDropdown src={ "/icons/meu-perfil.svg" }/>
                        <NavbarSuperior.LabelDropdown>Meu Perfil</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>

                    <NavbarSuperior.LinkDropdown href={ "/restaurante/meus-cupons" } >
                        <NavbarSuperior.IconeDropdown src={ "/icons/ticket_preto.svg" }/>
                        <NavbarSuperior.LabelDropdown>Meus Cupons</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>

                    <NavbarSuperior.LinkDropdown onClick={ () => logout() } >
                        <NavbarSuperior.IconeDropdown src={ "/icons/sair.svg" }/>
                        <NavbarSuperior.LabelDropdown>Sair</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                        
                </NavbarSuperior.Dropdown>

            </NavbarSuperior>
            <Overlay ativo={ ativo }/>
        </>
    )
}