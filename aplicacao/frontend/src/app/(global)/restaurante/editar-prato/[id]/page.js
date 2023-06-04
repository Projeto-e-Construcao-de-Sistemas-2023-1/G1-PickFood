'use client';

import { useEffect } from "react"

export default function Teste({ params }) {

    useEffect(() => {
        console.log(params)
    }, [params]);

    return (
        <div>ola mundo</div>
    )
}