import NavbarInferior from "@/components/NavbarInferior";

export default function NavbarInferiorRestaurante() {
    return(
        <NavbarInferior>
            <NavbarInferior.Item>
            <NavbarInferior.Link href={ "" }>
                <NavbarInferior.Icone src="/icons/cardapio.svg"/>
                <NavbarInferior.Label>Cardápio</NavbarInferior.Label>
            </NavbarInferior.Link>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
            <NavbarInferior.Link href={ "" }>
                <NavbarInferior.Icone src="/icons/home.svg"/>
                <NavbarInferior.Label>Home</NavbarInferior.Label>
            </NavbarInferior.Link>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
            <NavbarInferior.Link href={ "" }>
                <NavbarInferior.Icone src="/icons/pedidos.svg"/>
                <NavbarInferior.Label>Pedidos</NavbarInferior.Label>
            </NavbarInferior.Link>
            </NavbarInferior.Item>
        </NavbarInferior>
    )
}