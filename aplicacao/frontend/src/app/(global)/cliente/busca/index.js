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

const Busca = () => {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    const [pratos, setPratos] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState("restaurante");
    const [exibirFiltros, setExibirFiltros] = useState(false);
    const [ordenacao, setOrdenacao] = useState(0);


    useEffect(() => {

        let restaurantesExistentes;
        let pratosExistentes;

        if (tipoFiltro === "restaurante") {
            restaurantesExistentes = buscarRestaurantes({nome: busca}, ordenacao);
            setRestaurantes(restaurantesExistentes);
            return;
        }

        pratosExistentes = buscarPratosPorNome({nome: busca}, ordenacao);
        setPratos(pratosExistentes);

    }, [busca, tipoFiltro, exibirFiltros, ordenacao]);

    return(
        <div className={ container }>
            <Pesquisa setBusca={ setBusca } style={{ margin: "0" }}/>
            <div className={ filtrar } onClick={() => setExibirFiltros(prev => !prev)}>
                <p>Personalizar busca</p>
            </div>


            <div className={ filtros } style={{ display: exibirFiltros ? "block" : "none" }}>

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

                <Button className={ botao } onClick={() => setExibirFiltros(prev => !prev)}>Concluir personalização</Button>
            </div>
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