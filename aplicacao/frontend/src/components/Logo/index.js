import Image from "next/image";

export default function Logo({ ...restProps }) {
    return <Image
        src="/logo.svg"
        width={ 57 }
        height={ 31 }
        alt="Logo do PickFood. Consiste na palavra 'PickFood' sobrepondo dois circulos: um verde claro e outro verde escuro."
        { ...restProps }
    />
}