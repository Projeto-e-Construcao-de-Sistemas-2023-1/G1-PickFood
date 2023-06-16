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
import { buscarRestaurantes, buscarTodosRestaurantes } from "@/services/restaurante";
import { useRouter } from "next/navigation";

export default function Home() {
    const [busca, setBusca] = useState("");
    const [restaurantes, setRestaurantes] = useState([]);
    const router = useRouter();

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

      const restaurantes = buscarTodosRestaurantes();

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
  
    
  
    return (
      <>
        <div className={banner}>
          <Pesquisa onClick={ () => router.push("/cliente/busca") }/>
        </div>

        <TituloPagina>Restaurantes Disponíveis</TituloPagina>
  
        
        <ListaRestaurantes restaurantes={restaurantes} />

      </>
    );
  }
  