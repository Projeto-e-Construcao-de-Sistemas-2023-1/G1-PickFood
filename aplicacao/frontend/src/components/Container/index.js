import { container} from "./styles.module.css";

export default function Container({ children }) {
    return(
        <div className={ container }>{ children }</div>
    )
}