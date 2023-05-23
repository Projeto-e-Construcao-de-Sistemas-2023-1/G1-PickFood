'use client';

import NavbarSuperior from "@/components/NavbarSuperior";
import Overlay from "@/components/Overlay";
import { useState } from "react";

export default function NavbarSuperiorRestaurante() {

    const [ativo, setAtivo] = useState(false);

    return (
        <>
            <NavbarSuperior>
                <NavbarSuperior.Logo/>

                
                <NavbarSuperior.Botao onClick={ () => { setAtivo(prev => !prev) } }>
                    Restaurante
                </NavbarSuperior.Botao>



                <NavbarSuperior.Dropdown ativo={ ativo }>
                    <NavbarSuperior.LinkDropdown href="">
                        <NavbarSuperior.IconeDropdown src="/icons/meu-perfil.svg"/>
                        <NavbarSuperior.LabelDropdown>Meu Perfil</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                    <NavbarSuperior.LinkDropdown href="">
                        <NavbarSuperior.IconeDropdown src="/icons/sair.svg"/>
                        <NavbarSuperior.LabelDropdown>Sair</NavbarSuperior.LabelDropdown>
                    </NavbarSuperior.LinkDropdown>
                </NavbarSuperior.Dropdown>

            </NavbarSuperior>
            <Overlay ativo={ ativo }/>
        </>
    )
}