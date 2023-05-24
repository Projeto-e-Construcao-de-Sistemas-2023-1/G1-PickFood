import Image from "next/image"
import {
    nav,
    item,
    icone,
    label,
    link
} from "./styles.module.scss";
import Link from "next/link";

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

NavbarInferior.Link = function NavbarInferiorLink({ href, children }) {
    return(
        <Link className={ link } href={ href }>{ children }</Link>
    )
}

NavbarInferior.Icone = function NavbarInferiorIcone({ alt, ...restProps }) {
    return (
        <Image className={ icone } { ...restProps } alt={ alt } width={15} height={15}/>
    )
}

NavbarInferior.Label = function NavbarInferiorLabel({ children, ...restProps }) {
    return(
        <div className={ label } { ...restProps }>{ children }</div>
    )
}