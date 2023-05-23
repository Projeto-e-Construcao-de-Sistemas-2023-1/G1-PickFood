import NavbarSuperiorContainer from "@/containers/NavbarSuperiorRestaurante";
import NavbarInferiorCliente from "@/containers/NavbarInferiorRestaurante";

export default function RestauranteLayout({ children }) {
    return(
        <>
            <NavbarSuperiorContainer/>
            <>{children}</>
            <NavbarInferiorCliente/>
        </>
    );
}