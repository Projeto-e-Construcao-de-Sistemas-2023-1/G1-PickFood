'use client';

import Retornar from "@/components/Retornar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    container,
    prato_container,
    prato_foto,
    prato_nome,
    prato_descricao,
    prato_preco,
    divider,
    restaurante_nome,
    botao_adicionar
} from "./styles.module.scss";
import prato from "@/fixtures/prato";
import restaurante from "@/fixtures/restaurante";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/Button";
import { v4 as uuid } from "uuid";
import { adicionarItem } from "@/services/carrinho";
import { CarrinhoContext } from "@/contexts";
import { buscarPratoPorId } from "@/services/prato";
import { buscarRestaurantePorId } from "@/services/restaurante";

const Prato = ({ params: { idPrato } }) => {

    const router = useRouter();
    const { setItens } = useContext(CarrinhoContext);
    const [prato, setPrato] = useState({});
    const [restaurante, setRestaurante] = useState({});

    useEffect(() => {
        const pratoExistente = buscarPratoPorId(idPrato);
        const restauranteExistente = buscarRestaurantePorId(pratoExistente.idRestaurante);
        
        setPrato(pratoExistente);
        setRestaurante(restauranteExistente);
    }, [idPrato])

    const addCarrinho = () => {

        adicionarItem(prato, setItens);

        router.push("/cliente/meu-carrinho");
    }

    return(
        <div className={ container }>
            <Retornar navigate={ () => router.back() }/>
            <div className={ prato_container }>
                <Image
                    className={ prato_foto }
                    src={ "/icons/foto.svg" }
                    alt="."
                    width={ 120 }
                    height={ 120 }
                />
                <p className={ prato_nome }>{ prato.nome }</p>
                <p className={ prato_descricao }>{ prato.descricao }</p>
                <p className={ prato_preco }>R$ { prato.preco }</p>
            </div>
            <div className={ divider }></div>
            <p className={ restaurante_nome }>{ restaurante.nome_fantasia }</p>
            <Button className={ botao_adicionar } onClick={ addCarrinho }>Adicionar</Button>
        </div>
    )
}

export default Prato;