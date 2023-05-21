import NextImage from "next/image"

export default function Image({ restProps }) {
    return <NextImage  { ...restProps }/>
}