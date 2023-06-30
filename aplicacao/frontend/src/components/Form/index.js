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

Form.TextArea = function FormInput({ type, value, defaultValue, onChange, registrar, ...restProps }) {
    return <textarea 
        type={ type }
        value={ value } 
        onChange={ onChange } 
        className={ styles.textarea }
        maxLength={255}
        defaultValue={ defaultValue } 
        { ...registrar }
        { ...restProps }
    />
} 

Form.Input = function FormInput({ type, value, defaultValue, onChange, registrar, ...restProps }) {
    return <input 
        type={ type }
        value={ value } 
        onChange={ onChange } 
        className={ styles.input }
        defaultValue={ defaultValue } 
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

Form.Sucesso = function FormSucesso({ ativo, children }) {

    return(
        <div className={ styles.sucesso } style={{ display: ativo ? "block" : "none" }}>
            { children }
        </div>
    )
}