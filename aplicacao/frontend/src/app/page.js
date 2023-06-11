'use client';

import {
    descricao,
    banner,
    texto,
    espacamento,
    botao
} from "./styles.module.scss";
import NavbarSuperior from "@/components/NavbarSuperior";
import Link from "next/link";

export default function LandingPage() {

    return(
        <>
        <NavbarSuperior>
            <NavbarSuperior.Logo/>
            <Link href= { "auth/login" }>
                <NavbarSuperior.Botao>
                Entrar
                </NavbarSuperior.Botao>
            </Link> 
        </NavbarSuperior>

            <div className={ banner }>
                <div className= { texto }>Bem Vindo ao PickFood</div>
            </div>

            <h2 className={ descricao }>
                <div className={ espacamento }>
                    Bem-vindo(a) ao PickFood, onde você pode desfrutar de refeições
                    deliciosas e adaptadas às suas restrições alimentares.
                    Nossa plataforma oferece uma ampla variedade de pratos
                    cuidadosamente selecionados para vegetarianos, veganos, celíacos e
                    muito mais. Acreditamos que comer bem não precisa ser complicado, e
                    nossa missão é garantir que você possa desfrutar de uma experiência
                    gastronômica excepcional, sem comprometer o sabor.
                </div>
                <div className={ espacamento }>
                    Em nosso aplicativo, você encontrará um menu diversificado,
                    com opções para café da manhã, almoço, jantar e lanches rápidos.
                    Trabalhamos com restaurantes parceiros comprometidos em atender às
                    suas restrições alimentares, garantindo que você possa desfrutar de
                    refeições personalizadas de alta qualidade. Além disso, nossa
                    plataforma oferece recursos úteis, como filtragem personalizada e
                    avaliações de clientes, para ajudá-lo a fazer escolhas informadas
                    e descobrir novos prazeres gastronômicos.
                </div>
                <div className={ espacamento }>
                    Acreditamos que todos devem ter a oportunidade de desfrutar de uma
                    refeição incrível, independentemente de suas restrições alimentares.
                    Com o PinkFood, você pode aproveitar o melhor da culinária, sem
                    limites. Faça seu cadastro agora mesmo e descubra o saboroso mundo de
                    refeições personalizadas para suas necessidades específicas. É hora
                    de desfrutar de comida deliciosa, sem preocupações!
                </div>
            </h2>
        </>
    )
}
