'use client';

import { useState } from "react"
import styles from "./styles.module.scss"

export default function Pesquisa(){
    const [valor, setValor] = useState();

    const handleChange = (e) => {
        const input = e.target
        const val = input.value
        setValor(val)
    }

    return (
        <input onChange={ handleChange } value= { valor }/>
    )
}