'use client';

import { useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image";
import { 
    pesquisa,
    input, 
    buscar
} from "./styles.module.scss";
import Icone from "../Icone";
export default function Pesquisa({ setBusca }){
    
    const [valor, setValor] = useState("");


    const handleChange = (e) => {
        const input = e.target;
        const val = input.value;

        setValor(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setBusca(valor)
    }

    return (
        <form className={ pesquisa } onSubmit={ handleSubmit }>
            <input onChange={ handleChange } value= { valor } className={ input } placeholder="Busque aqui..."/>

            <Icone src={ "/icons/lupa.svg"} className={ buscar }/>
        </form>
    )
}