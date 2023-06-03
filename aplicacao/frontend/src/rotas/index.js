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
        retaurante: {
            cadastra1: {
                url: () => "/auth/cadastro1/"
            },
            cadastra2: {
                url: () => "/auth/cadastro2/"
            },
            cadastra3: {
                url: () => "/auth/cadastro3/"
            },
            cadastra4: {
                url: () => "/auth/cadastro4/"
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