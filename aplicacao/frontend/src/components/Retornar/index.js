import Link from "next/link";
import Icone from "../Icone";

const Retornar = ({ navigate, ...restProps }) => {

    return(
        <Icone
            src={ "/icons/back.svg" }
            onClick={ navigate }
            width={ 21 }
            height={ 21 }
            style={{ margin: "30px auto 20px auto" }}
            { ...restProps }
        />
    )
}

export default Retornar;