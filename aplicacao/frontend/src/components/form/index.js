import styles from "./style.module.css"

export default function Form({ children }) {
    return <form className={ styles.form }>{ children }</form>
}

Form.Field = function FormField({ children }) {
    return <div className={ styles.field }>{ children }</div>
}

Form.Label = function InputLabel({ children }) {
    return <label className={ styles.label }>{ children }</label>
}

Form.Input = function FormInput() {
    return <input className={ styles.input }/>
} 

Form.Button = function FormButton({ children }) {
    return <button>{ children }</button>
} 