'use client';

import { useState } from "react";
import { AuthContext, CarrinhoContext } from "@/contexts";
import { pegarCarrinho } from "@/services/carrinho";

const AutenticadoLayout = ({ children }) => {

    const [usuario, setUsuario] = useState({});
    const [itens, setItens] = useState(pegarCarrinho());

    return(
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            <CarrinhoContext.Provider value={{ itens, setItens }}>
                { children }
            </CarrinhoContext.Provider>
        </AuthContext.Provider>
    )
}

export default AutenticadoLayout;