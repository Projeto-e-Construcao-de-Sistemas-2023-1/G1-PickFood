import Image from "next/image";

const Icone = ({ src, width = 15, height = 15, alt = "", ...restProps }) => {

    return(
        <Image
            width={ width }
            height={ height }
            src={ src }
            alt="Icone."
            { ...restProps }
        />
    )
}

export default Icone;