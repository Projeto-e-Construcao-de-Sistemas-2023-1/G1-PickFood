import Image from "next/image";
import {
    modal,
    cabecalho,
    icone,
    titulo,
    corpo,
    rodape,
    botao,
    botaoConfirmar,
    botaoCancelar,
} from "./styles.module.scss";
import { createContext } from "react";


export default function Modal({ ativo = false, children, ...restProps }) {
    return(
        <div style={{ display: ativo ? "block" : "none" }} className={ modal } { ...restProps }>{ children }</div>
    )
}

Modal.Cabecalho = function ModalCabecalho({ children }) {
    return(
        <div className={ cabecalho }>{ children }</div>
    )
}

Modal.Icone = function ModalIcone({ svg }) {
    return(
        <Image className={ icone } alt="" src={ svg } width={20} height={20}/>
    )
}

Modal.Titulo = function ModelTitulo({ children }) {
    return(
        <h2 className={ titulo }>{ children }</h2>
    )
}

Modal.Corpo = function ModalCorpo({ children }) {
    return (
        <div className={ corpo }>{ children }</div>
    )
}

Modal.Rodape = function ModalRodape({ children }) {
    return(
        <div className={ rodape }>{ children }</div>
    )
}

Modal.BotaoConfirmar = function ModalBotaoConfimar({ onClick }) {
    return(
        <button className={ [botao, botaoConfirmar].join(" ") } onClick={ onClick }>Confimar</button>
    )
}

Modal.BotaoCancelar = function ModalBotaoCancelar({ onClick }) {
    return(
        <button className={ [botao, botaoCancelar].join(" ") } onClick={ onClick }>Cancelar</button>
    )
}