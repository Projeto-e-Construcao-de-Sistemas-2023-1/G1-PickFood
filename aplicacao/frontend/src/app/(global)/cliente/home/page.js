'use client';

import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Pesquisa from "@/components/Pesquisa";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts";
import request from "@/services/axios";
import TituloPagina from "@/components/TituloPagina";
import { buscarRestaurantes } from "@/services/restaurante";

export default function Home() {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
  
    const { usuario } = useContext(AuthContext);
  
    // const listByName = (valor) => {
    //   request
    //     .get(`restaurante/list/${valor}`)
    //     .then((response) => {
    //       const dados = response.data;
    //       setRestaurantes(dados);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     })
    //     .finally(() => {
    //       console.warn("Entrou no finally: ");
    //     });
    // };
  
    useEffect(() => {

      const restaurantes = buscarRestaurantes();

      setRestaurantes(restaurantes)
      // request
      //   .get("restaurante/list")
      //   .then((response) => {
      //     const dados = response.data;
      //     setRestaurantes(dados);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }, []);
  
    const handleBusca = (valor) => {
      setBusca(valor);
      listByName(valor);
    };
  
    return (
      <>
        <div className={banner}>
          <Pesquisa setBusca={handleBusca} />
        </div>

        <TituloPagina>Restaurantes Disponíveis</TituloPagina>
  
        {busca.length === 0 ? (
          <ListaRestaurantes restaurantes={restaurantes} />
        ) : (
          busca
        )}
      </>
    );
  }
  