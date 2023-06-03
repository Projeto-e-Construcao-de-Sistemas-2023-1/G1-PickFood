import styles from "./styles.module.scss"
import Button from "../Button"
export default function Form({ onSubmit, children, ...restProps }) {

    

    return(
        <form 
            onSubmit={ onSubmit } 
            className={ styles.form } 
            { ...restProps }
        >
            { children }
        </form>
    ) 
}

Form.Field = function FormField({ children, ...restProps }) {
    return <div className={ styles.field } { ...restProps }>{ children }</div>
}

Form.Label = function InputLabel({ children, ...restProps }) {
    return <label className={ styles.label } { ...restProps }>{ children }</label>
}

Form.Input = function FormInput({ type, value, onChange, registrar }) {
    return <input 
        type={ type }
        value={ value } 
        onChange={ onChange } 
        className={ styles.input } 
        
        { ...registrar }
    />
} 

Form.Button = function FormButton({ onClick, children, ...restProps }) {
    return <Button 
        onClick={ onClick } 
        type={ "submit "}
        { ...restProps }
    >
        { children }
    </Button>
} 