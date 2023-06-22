import Icone from "../Icone";
import {
    pagamento_lista,
    pagamento_item,
    pagamento_texto,
    icone
} from "./styles.module.scss";

const FormasPagamento = ({ formaPagamento, setFormaPagamento }) => {



    const formasPagamento = [
        {
            id: 1,
            nome: "Cartão de Débito",
            icone: "/icons/credit-card-outline.svg"
        },
        {
            id: 2,
            nome: "Cartão de Crédito",
            icone: "/icons/credit-card-outline.svg"
        },
        {
            id: 3,
            nome: "Pix",
            icone: "/icons/swap-horizontal.svg"
        },
        {
            id: 4,
            nome: "Dinheiro",
            icone: "/icons/cash.svg"
        },
    ];

    return(
        <ul className={ pagamento_lista }>
            {
                formasPagamento.map(forma => {

                    return(
                        <li className={ pagamento_item } onClick={() => {
                                setFormaPagamento(forma.nome)
                            }}
                            key={ forma.id }
                            style={{
                                backgroundColor: formaPagamento === forma.nome ? "#5ED0AE" : "initial"
                            }}
                        >
                            <Icone className={ icone } src={ forma.icone } alt={`Icone de ${forma.nome}`}/>
                            <p style={{ color: formaPagamento === forma.nome ? "#F8F8F8" : "initial" }} className={ pagamento_texto }>{ forma.nome }</p>
                        </li>
                    )
                })
            }
            {/* <li className={ pagamento_item } onClick={() => setFormaPagamento("Cartão de Débito")}>
                <Icone className={ icone } src="/icons/credit-card-outline.svg" alt="Icone de 'cartão de crédito'." width={15} height={15}/>
                <p className={ pagamento_texto }>Cartão de Débito</p>
            </li>
            <li className={ pagamento_item } onClick={() => setFormaPagamento("Cartão de Crédito")}>
                <Icone className={ icone } src="/icons/credit-card-outline.svg" alt="Icone de 'cartão de débio'." width={15} height={15}/>
                <p className={ pagamento_texto }>Cartão de Crédito</p>
            </li>
            <li className={ pagamento_item } onClick={() => setFormaPagamento("Pix")}>
                <Icone className={ icone } src="/icons/swap-horizontal.svg" alt="Icone de 'pix'." width={15} height={15}/>
                <p className={ pagamento_texto }>Pix</p>
            </li>
            <li className={ pagamento_item } onClick={() => setFormaPagamento("Dinheiro")}>
                <Icone className={ icone } src="/icons/cash.svg" alt="Icone de 'dinheiro'." width={15} height={15}/>
                <p className={ pagamento_texto }>Dinheiro</p>
            </li> */}
        </ul>
    )
}

export default FormasPagamento;
        