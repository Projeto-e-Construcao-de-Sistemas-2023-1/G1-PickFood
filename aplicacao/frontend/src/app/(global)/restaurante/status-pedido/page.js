'use client';

import { 
    divider,
    botao,
    texto,
    nome,
    codigo,
    status,
    checkbox
} from "./styles.module.scss"
import { useRouter } from "next/navigation";
import StatusPedido from "@/components/StatusPedido";
import Button from "@/components/Button";

export default function Pedidos() {

    const router = useRouter();      

    return (
        <>
            <div className={texto}>
                <div className={ nome }>Nome do cliente
                <div className={ codigo }>Código do Pedidos</div>
                </div>
                    <div className={ status }>Status atual:
                    <div className={ codigo }>status</div>
                    </div>
            </div>

            <StatusPedido/>

            <div className={ divider }></div>

            <div className={checkbox}>
                <input type= "checkbox" name ="b"/>
                <label for="b">Confirmar pedido</label>
            </div>
            <div className={checkbox}>
                <input type= "checkbox" name ="c"/>
                <label for="c">Em preparação</label>
            </div>
            <div className={checkbox}>
                <input type= "checkbox" name ="d"/>
                <label for="d">A caminho</label>
            </div>
            <div className={checkbox}>
                <input type= "checkbox" name ="e"/>
                <label for="e">Entregue</label>
            </div>

            <Button className={ botao }>Atualizar Status</Button>
        </>
    )
}