'use client';

import Form from "@/components/Form";
import Logo from "@/components/Logo";
import { logo } from "./styles.module.scss";
import Retornar from "@/components/Retornar";
import { useRouter } from "next/navigation";

const AuthLayout = ({ children }) => {
    
    const router = useRouter();

    return (
        <>
            <Retornar navigate={() => router.back()}/>
            <Logo className={ logo }/>
            
            { children }
        </>
    )
}

export default AuthLayout;