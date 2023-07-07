import { buscarTodosPedidos } from "@/services/pedido";
import { statusPedido } from "@/services/status_pedido";
import schedule from "node-schedule";
import moment from "moment";


const verificarPedidosAgendados = () => {
    const job = schedule.scheduleJob("*/5 * * * * *", () => {
        const pedidos = buscarTodosPedidos();

        console.log("estrou observando os pedidos agendados");

        let posicao = -1;

        const dataAtual = moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD");
        console.log(dataAtual);

        const horaAtual = moment(moment().format("HH:mm"), "HH:mm");
        console.log(horaAtual);

        for (const i in pedidos) {


            if (pedidos[i].status === statusPedido.AGENDADO) {

                console.log(pedidos[i]);

                if (dataAtual.diff(moment(pedidos[i].dataAgendamento, "YYYY-MM-DD")) < 0) {

                    console.log("Data atual ainda é menor que a data de agendamento.");
                    break;
                }

                if (dataAtual.diff(moment(pedidos[i].dataAgendamento, "YYYY-MM-DD")) === 0 && horaAtual.diff(moment(pedidos[i].horaAgendamento, "HH:mm")) < 0) {

                    console.log("Data atual é igual a data de agendamento, porém hora atual ainda é menor que a hora de agendamento.");
                    break;
                }

                console.log("Pedido pode ser iniciado.");

                posicao = i
            }
        }

        console.log(posicao);

        if (posicao === -1) {
            return;
        }

        pedidos[posicao] = {
            ...pedidos[posicao],
            status: statusPedido.AGUARDANDO_CONFIRMACAO,
            dataAgendamento: "",
            horaAgendamento: ""
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
