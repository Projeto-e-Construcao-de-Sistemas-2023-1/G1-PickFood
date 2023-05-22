import { button } from "./styles.module.scss";

export default function Button({ onClick, children }) {
    return <button 
        onClick={ onClick } 
        className={ button }
        type="button"
    >
        { children }
    </button>
}