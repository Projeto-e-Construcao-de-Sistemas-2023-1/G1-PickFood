import { buscarTodosPedidos } from "@/services/pedido";
import schedule from "node-schedule";

let horaAtual = new Date();

const verificarPedidosAgendados = () => {
    schedule.scheduleJob("*/5 * * * *", () => {
        const pedidos = buscarTodosPedidos();

        for (const pedido of pedidos){
            if(pedido.status === 7 && horaAtual >= pedido.dataAgendamento ){
                pedido.status = 1;
            }
        }

        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    });
};


// funcao para avançar  30 min no tempo e testar agendamento do pedido

const avancarTempo = (minutos) => {
    const minutosMiliSeg = minutos * 60000;
    horaAtual = new Date(horaAtual.getTime() + minutosMiliSeg);
};

export{
    verificarPedidosAgendados,
    avancarTempo
}
