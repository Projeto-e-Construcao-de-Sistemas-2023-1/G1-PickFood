import Button from "@/components/Button";
import Carrinho from "@/components/Carrinho";
import { tituloPagina } from "@/styles/componentes.module.scss";
import {
    info,
    textoPrimario,
    textoSecundario
} from "./styles.module.scss";

const MeuCarrinho = () => {
    
    return(
        <>
            <h2 className={ tituloPagina }>Meu carrinho</h2>
            
            <Carrinho/>
            
            <div className={ info }>
                <p className={ textoPrimario }>Entregar em:</p>
                <p className={ textoSecundario }>Endereço</p>
            </div>
            <div className={ info }>
                <p className={ textoPrimario }>Hoje, 30 - 45 minutos</p>
                <p className={ textoSecundario }>Taxa: R$10,00</p>
            </div>
            
            <Button>Continuar</Button>
        </>
    )
}

export default MeuCarrinho;