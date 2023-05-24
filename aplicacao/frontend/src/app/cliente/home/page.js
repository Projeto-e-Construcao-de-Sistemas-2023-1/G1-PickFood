import ListaRestaurantes from "@/components/ListaRestaurantes";
import {
    titulo,
    banner
} from "./styles.module.scss";
import Image from "next/image";

export default function Home() {
    return(
        <>
            <div className={ banner }></div>
            <h2 className={ titulo }>Restaurantes disponíveis</h2>
            <ListaRestaurantes/>
        </>
    )
}