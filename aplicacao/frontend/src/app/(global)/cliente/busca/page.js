'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import Pesquisa from "@/components/Pesquisa";
import { buscarRestaurantes } from "@/services/restaurante";
import { useEffect, useState } from "react";
import {
    container,
    filtrar,
    filtros,
    filtro,
    titulo,
    botao
} from "./styles.module.scss";
import ListaPratos from "@/components/ListaPratos";
import { buscarPratosPorNome } from "@/services/prato";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { buscarTodasRestricoes } from "@/services/restricao";

const Busca = () => {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    const [pratos, setPratos] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState("restaurante");
    const [exibirFiltros, setExibirFiltros] = useState(false);
    const [ordenacao, setOrdenacao] = useState(0);
    const [restricoes, setRestricoes] = useState([]);
    const [restricoesSelecionadas, setRestricoesSelecionadas] = useState([]);


    useEffect(() => {

        let restaurantesExistentes;
        let pratosExistentes;
        let restricoesExistentes = buscarTodasRestricoes();

        setRestricoes(restricoesExistentes);

        console.log(restricoesSelecionadas);

        if (tipoFiltro === "restaurante") {
            restaurantesExistentes = buscarRestaurantes({nome: busca}, ordenacao, restricoesSelecionadas);
            setRestaurantes(restaurantesExistentes);
            return;
        }

        pratosExistentes = buscarPratosPorNome({nome: busca}, ordenacao, restricoesSelecionadas);
        setPratos(pratosExistentes);

    }, [busca, tipoFiltro, exibirFiltros, ordenacao, restricoesSelecionadas]);

    return(
        <div className={ container }>
            <Pesquisa setBusca={ setBusca } style={{ margin: "0" }}/>
            <div className={ filtrar } onClick={() => setExibirFiltros(prev => !prev)}>
                <p>Personalizar busca</p>
            </div>


            <Modal  ativo={ exibirFiltros } posicaoY={ "-40%" }>
                
                <p className={ titulo }>O que deseja buscar? </p>

                <div className={ filtro }>
                    <input type="radio" value={"prato"} name="filtro" onChange={() => {
                        setTipoFiltro("prato");
                    }}/>
                    <label>Pratos</label>
                </div>
                <div className={ filtro } style={{ marginBottom: "20px" }}>
                    <input type="radio" value={"prato"} name="filtro" defaultChecked onChange={() => {
                        setTipoFiltro("restaurante");
                    }}/>
                    <label>Restaurantes</label>
                </div>

                <p className={ titulo }>Restrições: </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    {
                        restricoes?.map(restricao => {
                            return(
                                <div key={ restricao.id } className={ filtro }>
                                    <input value={ restricao.nome } type={ "checkbox" } onChange={(e) => {
                                        
                                        console.log(e.target.checked);

                                        if (e.target.checked) {
                                            setRestricoesSelecionadas(prev => [...prev, e.target.value])

                                            return;
                                        }

                                        let posicao = -1;

                                        for (const i in restricoesSelecionadas) {
                                            if (restricoesSelecionadas[i] === e.target.value) {
                                                posicao = i;
                                            }
                                        }

                                        console.log(restricoesSelecionadas[posicao]);

                                        restricoesSelecionadas.splice(posicao, 1);

                                        console.log(restricoesSelecionadas);

                                        setRestricoesSelecionadas(restricoesSelecionadas);
                                    }}/>
                                    <label>{ restricao.nome }</label>
                                </div>
                            )
                        })
                    }
                </div>

                <p className={ titulo }>Ordernar por: </p>

                <div className={ filtro }>
                    <input type="radio" value={ 0 } name="ordenacao" defaultChecked onChange={() => {
                        setOrdenacao(0);
                    }}/>
                    <label>Nome em ordem crescente</label>
                </div>
                <div className={ filtro }>
                    <input type="radio" value={ 1 } name="ordenacao" onChange={() => {
                        setOrdenacao(1);
                    }}/>
                    <label>Nome em ordem descrescente</label>
                </div>
                <div className={ filtro }  style={{ display: tipoFiltro === "restaurante" ? "none" : "block"}}>
                    <input type="radio" value={ 2 } name="ordenacao" onChange={() => {
                        setOrdenacao(2);
                    }}/>
                    <label>Menores preços</label>
                </div>
                <div className={ filtro }  style={{ display: tipoFiltro === "restaurante" ? "none" : "block"}}>
                    <input type="radio" value={ 3 } name="ordenacao" onChange={() => {
                        setOrdenacao(3);
                    }}/>
                    <label>Maiores preços</label>
                </div>

                <Button className={ botao } onClick={() => setExibirFiltros(false)}>Concluir personalização</Button>
            </Modal>
            {
                tipoFiltro === "prato" ?
                    <ListaPratos pratos={ pratos }/>
                    :
                    <ListaRestaurantes restaurantes={ restaurantes }/>
            }

        </div>
    )
}

export default Busca;