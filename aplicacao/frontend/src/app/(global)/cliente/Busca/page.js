'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import Pesquisa from "@/components/Pesquisa";
import { buscarRestaurantes } from "@/services/restaurante";
import { useEffect, useState } from "react";
import {
    container,
    filtrar,
    filtros,
    filtro
} from "./styles.module.scss";
import ListaPratos from "@/components/ListaPratos";
import { buscarPratosPorNome } from "@/services/prato";

const Busca = () => {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    const [pratos, setPratos] = useState([]);
    const [tipoFiltro, setTipoFiltro] = useState("restaurante");
    const [exibirFiltros, setExibirFiltros] = useState(false);


    useEffect(() => {

        
        const restaurantesExistente = buscarRestaurantes({nome: busca});
        const pratosExistentes = buscarPratosPorNome({nome: busca});

        //console.log(busca);
        console.log(tipoFiltro);

        setRestaurantes(restaurantesExistente);
        setPratos(pratosExistentes);
    }, [busca, tipoFiltro, exibirFiltros]);

    return(
        <div className={ container }>
            <Pesquisa setBusca={ setBusca } style={{ margin: "0" }}/>
            <div className={ filtrar } onClick={() => setExibirFiltros(prev => !prev)}>
                <p>Filtrar</p>

            </div>
            <div className={ filtros } style={{ display: exibirFiltros ? "block" : "none" }}>
                <div className={ filtro }>
                    <input type="radio" value={"prato"} name="filtro" onChange={() => {
                        setTipoFiltro("prato");
                    }}/>
                    <label>Prato</label>
                </div>
                <div>
                    <input type="radio" value={"prato"} name="filtro" defaultChecked onChange={() => {
                        setTipoFiltro("restaurante");
                    }}/>
                    <label>Restaurante</label>
                </div>
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