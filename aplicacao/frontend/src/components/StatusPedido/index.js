import {
    container,
    valorTotal,
    valor,
    pratos,
    prato,
    item,
    quantidade,
    nomePrato,
    interacoes,
    precoPrato,
    info,
    textoPrimario,
    textoSecundario
} from "./styles.module.scss";

const StatusPedido = () => {
    
    return(
        <div className={ container }>
            <div className={ pratos }>
                <div className={ prato }>
                    <div className={ item }>
                        <div className= { quantidade }>1</div>
                        <p className={ nomePrato }>Strogonoff de Frango</p>
                    </div>
                    <div className={ interacoes }>
                        <p className={ precoPrato }>R$ 10,00</p>
                    </div>
                </div>

                <div className={ prato }>
                    <div className={ item }>
                        <div className= { quantidade }>1</div>
                        <p className={ nomePrato }>Strogonoff de Frango</p>
                    </div>
                    <div className={ interacoes }>
                        <p className={ precoPrato }>R$ 10,00</p>
                    </div>
                </div>
        </div>

            <div className={ info }>
                <p className={ textoPrimario }>Entregar em:</p>
                <p className={ textoSecundario }>Endereço</p>
            </div>

            <div className={ valorTotal }>
                <p className={ valor }>Total: R$ valor total</p>
            </div>
                
        </div>
    )
}

export default StatusPedido;