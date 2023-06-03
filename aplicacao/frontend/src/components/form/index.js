import styles from "./styles.module.scss"
import Button from "../Button"
export default function Form({ children, ...restProps }) {
    return <form className={ styles.form } { ...restProps }>{ children }</form>
}

Form.Field = function FormField({ children, ...restProps }) {
    return <div className={ styles.field } { ...restProps }>{ children }</div>
}

Form.Label = function InputLabel({ children,...restProps}) {
    return <label className={ styles.label } { ...restProps }>{ children }</label>
}

Form.Input = function FormInput({ type, value, onChange, ...restProps }) {
    return <input className={ styles.input } value={ value } onChange={ onChange } type={ type } { ...restProps }/>
} 

Form.Button = function FormButton({ children, ...restProps }) {
    return <Button { ...restProps }>{ children }</Button>
} 