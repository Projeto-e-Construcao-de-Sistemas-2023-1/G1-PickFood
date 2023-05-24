import NavbarSuperiorContainer from "@/containers/NavbarSuperiorCliente";
import NavbarInferiorCliente from "@/containers/NavbarInferiorCliente";

export default function ClienteLayout({ children }) {
    return(
        <>
            <NavbarSuperiorContainer/>
            <div>{ children }</div>
            <NavbarInferiorCliente/>
        </>
    );
}