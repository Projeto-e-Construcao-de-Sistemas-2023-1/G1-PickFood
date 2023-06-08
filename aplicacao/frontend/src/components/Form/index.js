import styles from "./styles.module.scss";
import Button from "../Button";
import { v4 as uuid } from "uuid";

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

Form.Input = function FormInput({ type, value, onChange, registrar, ...restProps }) {
    return <input 
        type={ type }
        value={ value } 
        onChange={ onChange } 
        className={ styles.input } 
        { ...registrar }
        { ...restProps }
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

Form.Erros = function FormErros({ erros }) {

    return (
        Object.keys(erros).length !== 0 ?
            <div className={ styles.erros }>
                {

                    Object.entries(erros).map((erro) => {
                        return(
                            <li key={ uuid() } className={ styles.erro }>{ erro[1]["message"] }</li>
                        )
                    })
                }
            </div>
            :
            null
    )
}