# PickFood


## Minimundo:

Nos dias atuais, a maioria dos aplicativos já estabelecidos para entregas de comida não oferecem um suporte completo para pessoas com preferências ou restrições alimentares específicas, dificultando a busca por restaurantes que ofereçam esses tipos de alimento. Nesse cenário, o Pick Food surge como uma solução inovadora, que se propõe a conectar esses consumidores a restaurantes que atendam às suas necessidades de maneira fácil e direta. 

Para que um usuário tenha acesso ao Pick Food, ele deve se autenticar no sistema e, para isso, é necessário ter um cadastro. No caso dos clientes, o cadastro é feito preenchendo os dados "Nome", "CPF", "Senha", "Telefone" e "E-mail", sendo que não pode ter mais de um cliente com o mesmo "CPF" ou "E-mail". Já para os restaurantes, os dados que devem ser preenchidos são "Nome fantasia", "CNPJ", "Razão social" e "Endereço", não podendo ter o mesmo "Nome", "E-mail" ou "CNPJ". Além disso, um restaurante só pode ser cadastrado se elaborar algum prato com restrição alimentar. 

À vista disso, apenas restaurantes devidamente registrados podem fazer o cadastramento de pratos. Para um restaurante adicionar um novo item ao cardápio, é preciso cadastrar o prato com os dados "Nome", "Preço", "Tipo", "Descrição" e "Foto". Ademais, é possível que o restaurante  exclua um item ou altere os dados de algum item do cardápio.

Da mesma maneira que um prato pode ter seus dados alterados, é possível que os usuários realizem essa ação. Entretanto, caso algum dado seja preenchido de maneira incorreta, o sistema deve exibir uma mensagem de erro, detalhando ao usuário qual o problema. Caso um usuário queira excluir sua conta, deve se atentar se há algum pedido em andamento, pois caso haja, não será possível excluí-la.

Somente com a sessão iniciada no sistema, os clientes podem pesquisar opções de restaurantes e pratos aplicando filtros de restrição, de acordo com suas preferências e restrições alimentares.  A lista de pratos ou restaurantes exibidas pelo sistema é de acordo com a localização do usuário. Se a  pesquisa do cliente não retornar nenhum resultado, o sistema exibe uma mensagem de erro instruindo e permitindo que o cliente refaça a busca. Se o cliente realizar alguma busca e saia do sistema sem selecionar nada, não deve ser emitida uma mensagem de erro.

O cliente tem a possibilidade de filtrar os pratos por tipos de ingredientes. Esses filtros possuem título e descrição. Se ele optar por essa opção, o sistema exibe uma interface com uma lista dos tipos de ingredientes, sendo possível selecionar os que ele tem restrição. Aplicando os filtros de restrição, o sistema exibe os pratos que contêm as restrições do cliente. É necessário que o restaurante alerte aos clientes no seu cardápio sobre o risco de contaminação cruzada.

Ao selecionar um restaurante, o cliente pode adicionar itens do cardápio no carrinho. O cliente pode remover ou alterar dados dos itens que estão no carrinho do sistema. Visualizando as informações do carrinho, encontra-se o preço unitário de cada item selecionado, o preço total, as opções de selecionar mais itens e de finalizar compra. 

Optando por finalizar a compra, o cliente deve selecionar um meio de pagamento, que deve ser PIX, cartão ou dinheiro. Também deve ser selecionado a forma de receber o pedido, retirada no local ou entrega, o horário, que pode ser agendado pelo cliente, e o endereço de entrega, este que deve ser cadastrado pelo cliente no sistema. Se tiver a ausência de dados ou estejam inválidos, o sistema exibe uma mensagem de erro orientando o cliente. 

Ao realizar um pedido, o cliente pode visualizar os status dele, sendo 5 possibilidades: "Aguardando confirmação", "Confirmado", "Em preparo", "A caminho" e "Entregue". Os status são atualizados no sistema de acordo com o preparo do pedido. Caso o status do pedido seja "Aguardando confirmação" ou "Confirmado", o cliente pode cancelar o pedido. Se o pedido for cancelado, o sistema deve reembolsar o cliente. 

Os pedidos feitos pelos clientes são enviados pelos restaurantes e são gerenciados pelo sistema, que também é responsável pela emissão da nota fiscal do pedido. A nota fiscal é entregue ao cliente junto com o pedido. Enquanto o pedido estiver pendente, é possível que o cliente entre em contato, via e-mail, com o restaurante e vice-versa.

Assim que o pedido é entregue e concluído o pedido é armazenado no histórico de pedidos do cliente e é possível pode avaliar o restaurante e avaliar o prato. Caso um restaurante receba 3 ou mais reclamações por pedido por não conter os ingredientes litados, ele será banido do sistema. Caso seja da escolha do cliente, ele pode favoritar o restaurante ou prato, assim como também tem a opção de remover dos favoritos. Se necessário, o sistema oferece ao cliente a possibilidade de enviar um e-mail ao suporte.


<hr>

Todos os arquivos estão sendo versionados nesse projeto

