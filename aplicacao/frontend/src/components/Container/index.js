import { container} from "./styles.module.scss";

export default function Container({ children }) {
    return(
        <div className={ container }>{ children }</div>
    )
}