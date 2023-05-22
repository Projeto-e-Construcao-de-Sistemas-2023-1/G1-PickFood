import Image from "next/image"
import {
    nav,
    item,
    icone,
    label
} from "./styles.module.scss";

export default function NavbarInferior({ children, ...restProps }) {
    return (
        <nav className={ nav } { ...restProps }>{ children }</nav>
    )
}

NavbarInferior.Item = function NavbarInferiorItem({ children, ...restProps }) {
    return(
        <div className={ item } { ...restProps }>{ children }</div>
    )
}

NavbarInferior.Icone = function NavbarInferiorIcone({ alt, ...restProps }) {
    return (
        <Image className={ icone } { ...restProps } alt={ alt } width={9.5} height={10}/>
    )
}

NavbarInferior.Label = function NavbarInferiorLabel({ children, ...restProps }) {
    return(
        <div className={ label } { ...restProps }>{ children }</div>
    )
}