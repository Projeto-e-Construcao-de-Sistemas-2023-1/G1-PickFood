import { criarRestricao } from "@/services/restricao";

const popular = () => {
    criarRestricao({ nome: "Sem lactose" });
    criarRestricao({ nome: "Low carb" });
    criarRestricao({ nome: "Sem glútem" });
    criarRestricao({ nome: "Pouco sódio" });
    criarRestricao({ nome: "Sem sódio" });
    criarRestricao({ nome: "Comida de bebê" });
    criarRestricao({ nome: "Criança menor de 6 meses" });
    criarRestricao({ nome: "Criança maior que 2 anos" });
    criarRestricao({ nome: "Criança entre 6 meses e 2 anos" });
}

export default popular;