import { overlay } from "./styles.module.scss"

export default function Overlay({ ativo = false }) {
    return <div style={{ display: ativo ? "block" : "none" }} className={ overlay }></div>
}