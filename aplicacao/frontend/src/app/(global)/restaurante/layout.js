'use client';

import NavbarSuperiorContainer from "@/containers/NavbarSuperiorRestaurante";
import NavbarInferiorCliente from "@/containers/NavbarInferiorRestaurante";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts";

export default function RestauranteLayout({ children }) {

    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {

        console.log(usuario)
        
        if (!usuario || Object.keys(usuario).length === 0) {
            router.push("/auth/login");
        }

    }, [usuario, router])

    return(
        <>
            <NavbarSuperiorContainer/>
                <>{children}</>
            <NavbarInferiorCliente/>
        </>
    );
}