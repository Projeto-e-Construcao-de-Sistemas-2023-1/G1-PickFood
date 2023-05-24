'use client';

import { useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image";
import { 
    pesquisa,
    adicionar,
    input, 
    buscar
} from "./styles.module.scss";
export default function Pesquisa({ setBusca }){
    
    const [valor, setValor] = useState();

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
            <input onChange={ handleChange } value= { valor } className={ input } placeholder="      Busque aqui..."/>
           
            <Image className= { buscar }
                src="/icons/busca.svg"
                width={ 21 }
                height={ 21 }
                alt="Icone de uma lupa."
            />
        </form>
    )
}