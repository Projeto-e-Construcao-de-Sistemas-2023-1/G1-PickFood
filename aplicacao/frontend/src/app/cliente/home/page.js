import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Image from "next/image";
import Pesquisa from "@/components/Pesquisa";

export default function Home() {
    return(
        <>
            <div className={ banner }>
                <Pesquisa/>
            </div>
            <h2 className={ titulo }>Restaurantes disponíveis</h2>
            <ListaRestaurantes restaurantes={ {} }/>
        </>
    )
}