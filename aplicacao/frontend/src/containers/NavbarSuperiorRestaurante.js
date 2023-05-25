'use client';

import NavbarSuperior from "@/components/NavbarSuperior";
import Overlay from "@/components/Overlay";
import { useState } from "react";
import navbarSuperiorRestaurante from "@/fixtures/navbar-superior-restaurante";

export default function NavbarSuperiorRestaurnte() {

    const [ativo, setAtivo] = useState(false);

    return (
        <>
            <NavbarSuperior>
                <NavbarSuperior.Logo/>

                
                <NavbarSuperior.Botao onClick={ () => { setAtivo(prev => !prev) } }>
                    Restaurante
                </NavbarSuperior.Botao>

                <NavbarSuperior.Dropdown ativo={ ativo }>
                    {
                        navbarSuperiorRestaurante.map(({ id, link, icone, label }) => {
                            return(
                                <NavbarSuperior.LinkDropdown href={ link } key={ id }>
                                    <NavbarSuperior.IconeDropdown src={ icone }/>
                                    <NavbarSuperior.LabelDropdown>{ label }</NavbarSuperior.LabelDropdown>
                                </NavbarSuperior.LinkDropdown>
                            )
                        })
                    }
                </NavbarSuperior.Dropdown>

            </NavbarSuperior>
            <Overlay ativo={ ativo }/>
        </>
    )
}