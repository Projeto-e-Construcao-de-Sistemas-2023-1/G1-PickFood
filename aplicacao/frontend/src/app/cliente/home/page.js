import ListaRestaurantes from "@/components/ListaRestaurantes";

export default function Home() {
    return(
        <>
            <h2>Restaurantes disponíveis</h2>
            <ListaRestaurantes>
                <ListaRestaurantes.Item href={ "" }>
                    <ListaRestaurantes.Nome>Nome do restaurante</ListaRestaurantes.Nome>
                    <ListaRestaurantes.Restricoes>
                        <ListaRestaurantes.Restricao>
                            Sem lactose
                        </ListaRestaurantes.Restricao>
                        <ListaRestaurantes.Restricao>
                            Low carb
                        </ListaRestaurantes.Restricao>
                    </ListaRestaurantes.Restricoes>
                </ListaRestaurantes.Item>
            </ListaRestaurantes>
        </>
    )
}