const mensagens = {
    required: (campo) => {
        return `O campo "${campo}" deve ser preenchido.` 
    },

    minLength: (campo, min) => {
        return `O campo '${campo}' deve possuir no mínimo ${min} caracteres`
    }
}

export { mensagens }