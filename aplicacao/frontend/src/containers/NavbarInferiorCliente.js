import NavbarInferior from "@/components/NavbarInferior";

export default function NavbarInferiorCliente() {
    return(
        <NavbarInferior>
            <NavbarInferior.Item>
                <NavbarInferior.Icone src="/icons/buscar.svg"/>
                <NavbarInferior.Label>Buscar</NavbarInferior.Label>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
                <NavbarInferior.Icone src="/icons/home.svg"/>
                <NavbarInferior.Label>Home</NavbarInferior.Label>
            </NavbarInferior.Item>
            <NavbarInferior.Item>
                <NavbarInferior.Icone src="/icons/carrinho.svg"/>
                <NavbarInferior.Label>Carrinho</NavbarInferior.Label>
            </NavbarInferior.Item>
        </NavbarInferior>
    )
}