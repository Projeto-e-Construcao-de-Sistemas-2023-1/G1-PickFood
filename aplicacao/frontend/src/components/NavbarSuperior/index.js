import Link from "next/link"
import Logo from "../Logo"
import Image from "next/image"
import Button from "../Button"
import { 
    nav, 
    botao,
    dropdown,
    linkDropdown,
    iconeDropdown,
    overlay
} from "./styles.module.scss";

export default function NavbarSuperior({ children }) {
    return(
        <nav className={ nav }>{ children }</nav>
    )
}

NavbarSuperior.Logo = function NavbarSuperiorLogo() {
    return <Logo/>
}

NavbarSuperior.Botao = function NavbarSuperiorBotao({ children, onClick, ...restProps }) {
    return <button onClick={ onClick } className={ botao } { ...restProps }>{ children }</button>
}

NavbarSuperior.Dropdown = function NavbarSuperiorDropdown({ ativo = false, children, ...restProps }) {
    return <div className={ dropdown } { ...restProps } style={{ display: ativo ? "block" : "none"}}>{ children }</div>
}

NavbarSuperior.LinkDropdown = function NavbarSuperiorLinkDropdown({ href = "/auth/login", children, ...restProps }) {
    return <Link href={ href } className={ linkDropdown } { ...restProps }>{ children }</Link>
}

NavbarSuperior.IconeDropdown = function NavbarSuperiorIconeDropDown({ ...restProps  }) {
    return <Image className={ iconeDropdown } width={15} height={15} { ...restProps }/>
}

NavbarSuperior.LabelDropdown = function NavbarSuperiorLabelDropDown({ children }) {
    return <div>{ children }</div>
}

NavbarSuperior.Overlay = function NavbarSuperiorOverlay() {
    return <div className={ overlay }></div>
}