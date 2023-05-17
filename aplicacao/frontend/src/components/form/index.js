export default function Form({ children }) {
    return <form>{ children }</form>
}

Form.Field = function FormField({ children }) {
    return <div>{ children }</div>
}

Form.Label = function InputLabel({ children }) {
    return <label>{ children }</label>
}

Form.Input = function FormInput() {
    return <input/>
} 

Form.Button = function FormButton({ children }) {
    return <button>{ children }</button>
} 