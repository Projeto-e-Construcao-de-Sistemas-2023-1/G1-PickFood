'use client';

import { useEffect, useState } from "react";
import { AuthContext, CarrinhoContext } from "@/contexts";
import { pegarCarrinho } from "@/services/carrinho";
import { verificarPedidosAgendados } from "@/utils/agendamento";

const AutenticadoLayout = ({ children }) => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
    const [itens, setItens] = useState(pegarCarrinho());

    useEffect(() => {
        console.log("Estou no AutenticadoLayout");

        verificarPedidosAgendados();
    }, []);

    return(
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            <CarrinhoContext.Provider value={{ itens, setItens }}>
                { children }
            </CarrinhoContext.Provider>
        </AuthContext.Provider>
    )
}

export default AutenticadoLayout;