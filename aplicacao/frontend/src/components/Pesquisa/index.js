'use client';

import { useState } from "react"
import styles from "./styles.module.scss"
import Image from "next/image";
import { 
    pesquisa,
    adicionar,
    input, 
    icone,
    buscar
} from "./styles.module.scss";
export default function Pesquisa(){
    
    const [valor, setValor] = useState();
    const handleChange = (e) => {
        const input = e.target
        const val = input.value
        setValor(val)
    }

    return (
        <div className={ pesquisa }>
            <input onChange={ handleChange } value= { valor } className={ input } placeholder="      Busque aqui..."/>
           
            <Image className= { buscar }
                src="/icons/busca.svg"
                width={ 21 }
                height={ 21 }
                alt="Icone de uma lupa."
            />

            <Image className= { adicionar }
                src="/icons/adicionar.svg"
                width={ 21 }
                height={ 21 }
                alt="Icone de círculo com um + no centro."
            />   
        </div>
    )
}