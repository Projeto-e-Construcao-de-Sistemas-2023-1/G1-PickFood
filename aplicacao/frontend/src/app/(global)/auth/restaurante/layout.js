'use client';

import { createContext, useState } from "react"

export const CadastroRestauranteContext = createContext();

export default function CadastroRestauranteLayout({ children }) {
    
    const [dados, setDados] = useState({});

    return(

        <CadastroRestauranteContext.Provider value={ {dados, definirDados: setDados} }>
            { children }
        </CadastroRestauranteContext.Provider>
    )
}