import NavbarInferior from "@/components/NavbarInferior";

export default function NavbarInferiorCliente() {
    return(
        <NavbarInferior>
            <NavbarInferior.Item>
                <NavbarInferior.Link href={ "" }>
                    <NavbarInferior.Icone src="/icons/buscar.svg"/>
                    <NavbarInferior.Label>Buscar</NavbarInferior.Label>
                </NavbarInferior.Link>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
                <NavbarInferior.Link href={ "/cliente/home" }>
                    <NavbarInferior.Icone src="/icons/home.svg"/>
                    <NavbarInferior.Label>Home</NavbarInferior.Label>
                </NavbarInferior.Link>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
                <NavbarInferior.Link href={ "/cliente/meu-carrinho" }>
                    <NavbarInferior.Icone src="/icons/carrinho.svg"/>
                    <NavbarInferior.Label>Carrinho</NavbarInferior.Label>
                </NavbarInferior.Link>
            </NavbarInferior.Item>
        </NavbarInferior>
    )
}