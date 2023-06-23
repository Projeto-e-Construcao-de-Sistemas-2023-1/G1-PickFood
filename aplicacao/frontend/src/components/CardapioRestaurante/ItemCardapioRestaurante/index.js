import Icone from "@/components/Icone";
import Link from "next/link";
import {
    texto,
    foto,
    editar,
    lixo,
    preco,
    nome
} from "./styles.module.scss";
import Modal from "@/components/Modal";
import { useState } from "react";
import { excluirPrato } from "@/services/prato";

const ItemCardapioRestaurante = ({ prato, ...restProps }) => {

    const [ativo, setAtivo] = useState(false);
    const [excluido, setExcluido] = useState(false);

    const removerPrato = () => {

        excluirPrato(prato.id);
        setExcluido(true);
    }

    

    return(
        <>
            <Modal ativo={ ativo }>
                <Modal.Cabecalho>
                    <Modal.Icone svg="/icons/aviso.svg"/>
                    <Modal.Titulo>Tem certeza que deseja excluir esse item?</Modal.Titulo>
                </Modal.Cabecalho>

                <Modal.Rodape>
                    <Modal.BotaoConfirmar onClick={() => {
                        removerPrato();
                        setAtivo(false);
                    }}/>
                    <Modal.BotaoCancelar onClick={ () => setAtivo(false) }/>
                </Modal.Rodape>
            </Modal>

            <li className={texto} key={ prato.id } id={ prato.id} { ...restProps } style={{ display: excluido ? "none" : ""}}>
                <div style={{ display: "flex", alignContent: "center"}}>

                    <Icone className={foto}
                        src="/icons/foto.svg"
                        width={ 21 }
                        height={ 21 }
                        alt="Icone de seta apontando para trás."
                        />
                    <div className={ nome }>{ prato.nome }
                        <div className={ preco }>R$ { prato.preco }</div>
                    </div>
                </div>
                <div>

                    <Link href={"/restaurante/editar-prato/" + prato.id}>
                        <Icone
                        src="/icons/editar.svg"
                        className={ editar }
                        width={ 14 }
                        height={ 14 }
                        alt="Icone de editar."
                        />
                    </Link>
                    
                    <Icone
                        src="/icons/lixo.svg"
                        className={ lixo }
                        width={ 14 }
                        height={ 14 }
                        onClick={ () => {
                            setAtivo(prev => !prev)
                        } }
                        alt="Icone de lixo."
                    />
                </div>
            </li>
        </>
    )
}

export default ItemCardapioRestaurante;