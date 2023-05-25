'use client';

import NavbarSuperiorContainer from "@/containers/NavbarSuperiorCliente";
import NavbarInferiorCliente from "@/containers/NavbarInferiorCliente";
import { useContext, useEffect } from "react";
import { AuthContext } from "../layout";
import { useRouter } from "next/navigation";

export default function ClienteLayout({ children }) {

    const { usuario } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {

        console.log(usuario)
        if (Object.keys(usuario).length === 0) {
            router.push("/auth/login");
        }

    }, [usuario, router])

  

    return(
        <>
            <NavbarSuperiorContainer/>
            <div>{ children }</div>
            <NavbarInferiorCliente/>
        </>
    );
}