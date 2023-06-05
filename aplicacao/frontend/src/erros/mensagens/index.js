const mensagens = {
    required: (campo) => {
        return `O campo "${campo}" deve ser preenchido.` 
    },

    minLength: (campo, min) => {
        return `O campo "${campo}" deve possuir no mínimo ${min} caracteres`
    },

    maxLength: (campo, max) => {
        return `O campo "${campo}" deve possuir no máximo ${max} caracteres`
    }
}

export { mensagens }