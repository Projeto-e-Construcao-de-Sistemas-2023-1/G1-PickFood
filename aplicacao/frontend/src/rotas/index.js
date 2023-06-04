const rotas = {
    home: {
        url: () => "/"
    },
    auth: {
        cliente: {
            cadastro: {
                url: () => "/auth/cadastro/"
            }
        },
        login: {
            url: () => "/auth/login/"
        },
        restaurante: {
            cadastro1: {
                url: () => "/auth/restaurante/cadastro1/"
            },
            cadastro2: {
                url: () => "/auth/restaurante/cadastro2/"
            },
            cadastro3: {
                url: () => "/auth/restaurante/cadastro3/"
            },
            cadastro4: {
                url: () => "/auth/restaurante/cadastro4/"
            }
        }
    },
    cliente: {
        home: {
            url: () => "/cliente/home/"
        },
        meu_perfil: {
            url: () => "/cliente/meu-perfil/",
            meus_dados: {
                url: () => "/cliente/meu-perfil/meus-dados/"
            },
            meus_enderecos: {
                url: () => "/cliente/meu-perfil/meus-enderecos/"
            }
        }, 
    },
    restaurante: {
        home: {
            url: () => "/restaurante/home/"
        },
        cardapio: {
            url: () => "/restaurante/cardapio/"
        },
        criar_prato: {
            url: () => "/restaurante/criar-prato/"
        },
        editar_prato: {
            url: (id) => "/restaurante/editar-prato/" + id  
        },
        perfil: {
            url: () => "/restaurante/perfil/"
        }
    }
}

export default rotas;