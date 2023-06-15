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

const StatusPedido = ({ itensPedido }) => {
    
    const calcularTotalPedido = () => {
        let total = 0;

        for (const item of itensPedido) {
            total += Number.parseFloat(item.valor);
        }

        return total;
    }

    return(
        <div className={ container }>
            <div className={ pratos }>
                {
                    itensPedido?.map(itemPedido => {

                        return(

                            <div className={ prato } key={ itemPedido.id }>
                                <div className={ item }>
                                    <div className= { quantidade }>{ itemPedido.quantidade }</div>
                                    <p className={ nomePrato }>{ itemPedido.prato.nome }</p>
                                </div>
                                <div className={ interacoes }>
                                    <p className={ precoPrato }>{ itemPedido.valor }</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className={ valorTotal }>
                <p className={ valor }>Total: </p>
                <p>{ calcularTotalPedido() }</p>
            </div>
                
        </div>
    )
}

export default StatusPedido;