import { useRouter } from "next/router";
import Icone from "../Icone";
import {
    cupom_item,
    cupom_dados,
    cupom_info,
    cupom_titulo,
    cupom_valor,
    cupom_icone
} from "./styles.module.scss";

const ListaCupons = ({ cupons }) => {

    const router = useRouter();

    return(
        <ul>
                {
                    cupons?.map(cupom => {

                        return (
                            <li key={ cupom.id } className={ cupom_item }>
                                <div className={ cupom_dados }>
                                    <Icone src={ "/icons/ticket_verde.svg" } className={ cupom_icone }/>
                                    <div className={ cupom_info }>
                                        <p className={ cupom_titulo }>{ cupom.titulo }</p>
                                        <span className={ cupom_valor }>R$ { cupom.valor }</span>
                                    </div>
                                </div>
                                <Icone src={ "/icons/mais.svg" } onClick={() => router.push("restaurante/meus-cupons/editar-cupom/" + cupom.id)}/>
                            </li>
                        )
                    })
                }
                
            </ul>
    )
}

export default ListaCupons;
        