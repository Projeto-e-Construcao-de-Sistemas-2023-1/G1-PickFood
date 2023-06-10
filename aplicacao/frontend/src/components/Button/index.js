import { button } from "./styles.module.scss";

export default function Button({ type = "button", onClick, children, className = "", ...restProps }) {
    return <button 
        type={ type }
        onClick={ onClick } 
        className={ button }
        { ...restProps }
    >
        { children }
    </button>
}