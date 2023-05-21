import { button } from "./styles.module.css";

export default function Button({ onClick, children }) {
    return <button 
        onClick={ onClick } 
        className={ button }
    >
        { children }
    </button>
}