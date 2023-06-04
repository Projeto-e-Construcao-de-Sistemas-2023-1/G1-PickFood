'use client';

import { useState } from "react";
import { AuthContext } from "@/contexts";

const AutenticadoLayout = ({ children }) => {

    const [usuario, setUsuario] = useState({});

    return(
        <AuthContext.Provider value={{usuario, definirUsuario: setUsuario}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AutenticadoLayout;