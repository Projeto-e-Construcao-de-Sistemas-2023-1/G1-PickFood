-- table user
INSERT INTO user (id, email, senha) VALUES (1, 'joao.coura@edu.unirio.br', 'joao1234');
INSERT INTO user (id, email, senha) VALUES (2, 'romulo.pastore@edu.unirio.br', 'romulo1234');
INSERT INTO user (id, email, senha) VALUES (3, 'ghi@email.com', '789');
INSERT INTO user (id, email, senha) VALUES (4, 'juangsantanna@edu.unirio.br', 'juan1234');
INSERT INTO user (id, email, senha) VALUES (5, 'bqueiroz@edu.unirio.br', 'beatriz1234');

-- table cliente
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('12345678900', 'João Coura', '987654321', 1);
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('98765432100', 'Rômulo Pastore', '123456789', 2);
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('55555555555', 'Pedro Oliveira', '111111111', 3);

-- table endereco 
INSERT INTO endereco (id, bairro, cep, complemento, numero, rua) 
VALUES (1, 'Centro', '12345-678', 'Bloco A', 10, 'Rua Principal');
INSERT INTO endereco (id, bairro, cep, complemento, numero, rua) 
VALUES (2, 'Bairro do Parque', '98765-432', 'Apartamento 302', 15, 'Rua das Flores');
INSERT INTO endereco (id, bairro, cep, complemento, numero, rua) 
VALUES (3, 'Vila Nova', '54321-876', 'Casa 5', 5, 'Rua dos Coqueiros');
INSERT INTO endereco (id, bairro, cep, complemento, numero, rua) 
VALUES (4, 'Jardim das Flores', '76543-210', 'Casa 8', 8, 'Rua das Violetas');
INSERT INTO endereco (id, bairro, cep, complemento, numero, rua) 
VALUES (5, 'Centro Comercial', '98765-432', 'Loja 105', 105, 'Avenida Principal');

-- table cliente-endereco
INSERT INTO cliente_endereco (cliente, endereco) VALUES ('12345678900', 1);
INSERT INTO cliente_endereco (cliente, endereco) VALUES ('98765432100', 2);
INSERT INTO cliente_endereco (cliente, endereco) VALUES ('98765432100', 3);

-- table restaurante
INSERT INTO restaurante (cnpj, horario_abertura, horario_fechamento, nome_fantasia, razao_social, taxa_entrega, telefone, endereco, user) 
VALUES ('12345678901234', '10:00:00', '20:00:00', 'Gostosuras do Juan', 'Empresa A Ltda.', 5.99, '987654321', 4, 4);
INSERT INTO restaurante (cnpj, horario_abertura, horario_fechamento, nome_fantasia, razao_social, taxa_entrega, telefone, endereco, user) 
VALUES ('98765432109876', '11:30:00', '22:00:00', 'Cantina da Triz', 'Empresa B Ltda.', 3.99, '123456789', 5, 5);

-- table item (a foto é fictícia)
INSERT INTO item (id, descricao, foto, nome, preco, tipo, restaurante) 
VALUES (1, 'Hambúrguer de lentilha e queijo vegetal de castanha-de-caju, com tomate, alface, cebola, shitake e molho', 'hamburguer.jpg', 'Cheeseburger', 29.99, 'Lanche', '12345678901234');
INSERT INTO item (id, descricao, foto, nome, preco, tipo, restaurante) 
VALUES (2, 'Pizza saborosa sem lactose', 'pizza.jpg', 'Margherita', 30.00, 'Pizza', '12345678901234');
INSERT INTO item (id, descricao, foto, nome, preco, tipo, restaurante) 
VALUES (3, 'Sushi fresco', 'sushi.jpg', 'Salmão Nigiri', 34.90, 'Sushi', '98765432109876');
INSERT INTO item (id, descricao, foto, nome, preco, tipo, restaurante) 
VALUES (4, 'Coca lata 350ml', 'coca.jpg', 'Coca-cola', 9.00, 'Bebibda', '98765432109876');

-- table categoria
INSERT INTO categoria (id, nome) VALUES (1, "Confeitaria");
INSERT INTO categoria (id, nome) VALUES (2, "Mexicano");
INSERT INTO categoria (id, nome) VALUES (3, "Pizzaria");
INSERT INTO categoria (id, nome) VALUES (4, "Japonês");
INSERT INTO categoria (id, nome) VALUES (5, "Saudável");

-- table ingrediente_alergenico
INSERT INTO ingrediente_alergenico (id, nome) VALUES (1, 'Leite');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (2, 'Ovo');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (3, 'Frutos do Mar');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (4, 'Peixe');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (5, 'Soja');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (6, 'Trigo');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (7, 'Centeio');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (8, 'Cevada');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (9, 'Aveia');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (10, 'Amendoim');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (11, 'Amendoa');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (12, 'Avelã');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (13, 'Castanha');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (14, 'Macadâmia');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (15, 'Pistache');
INSERT INTO ingrediente_alergenico (id, nome) VALUES (16, 'Nozes');
    
-- table restricao
INSERT INTO restricao (id, nome) VALUES (1, 'Sem Glúten');
INSERT INTO restricao (id, nome) VALUES (2, 'Sem Lactose');
INSERT INTO restricao (id, nome) VALUES (3, 'Sem Açúcar');
INSERT INTO restricao (id, nome) VALUES (4, 'Sem Sal');
INSERT INTO restricao (id, nome) VALUES (5, 'Sem Gordura');
INSERT INTO restricao (id, nome) VALUES (6, 'Vegetariano');
INSERT INTO restricao (id, nome) VALUES (7, 'Vegano');
INSERT INTO restricao (id, nome) VALUES (8, 'Cetogênico');
INSERT INTO restricao (id, nome) VALUES (9, 'Low Carb');

-- table pedido 
INSERT INTO pedido (id, data, forma_pagamento, status, valor_total, cliente, restaurante) 
VALUES (1, '2023-06-15', 'Pix', 'Entregue', 59.98, '12345678900', '12345678901234');
INSERT INTO pedido (id, data, forma_pagamento, status, valor_total, cliente, restaurante) 
VALUES (2, '2023-06-14', 'Crédito', 'Cancelado', 43.90, '12345678900', '98765432109876');
INSERT INTO pedido (id, data, forma_pagamento, status, valor_total, cliente, restaurante) 
VALUES (3, '2023-06-15', 'Dinheiro', 'Entregue', 29.99, '98765432100', '12345678901234');

-- table cliente_pedidos
INSERT INTO cliente_pedidos (cliente, pedido) 
VALUES ('12345678900', 1);
INSERT INTO cliente_pedidos (cliente, pedido) 
VALUES ('12345678900', 2);
INSERT INTO cliente_pedidos (cliente, pedido) 
VALUES ('98765432100', 3);

-- table favoritos_prato
INSERT INTO favoritos_prato (cliente, item) VALUES ('12345678900', 1);
INSERT INTO favoritos_prato (cliente, item) VALUES ('12345678900', 2);
INSERT INTO favoritos_prato (cliente, item) VALUES ('98765432100', 1);
INSERT INTO favoritos_prato (cliente, item) VALUES ('98765432100', 3);

-- table favoritos_restaurante
INSERT INTO favoritos_restaurante (cliente, restaurante) VALUES ('98765432100', '12345678901234');
INSERT INTO favoritos_restaurante (cliente, restaurante) VALUES ('98765432100', '98765432109876');
INSERT INTO favoritos_restaurante (cliente, restaurante) VALUES ('12345678900', '12345678901234');

-- table item_pedido
INSERT INTO item_pedido (pedido, item, quantidade, valor) VALUES (1, 1, 2, 59.98);
INSERT INTO item_pedido (pedido, item, quantidade, valor) VALUES (2, 3, 1, 34.90);
INSERT INTO item_pedido (pedido, item, quantidade, valor) VALUES (2, 4, 1, 9.00);
INSERT INTO item_pedido (pedido, item, quantidade, valor) VALUES (3, 1, 1, 29.99);

-- table item_restricao
INSERT INTO item_restricao (item, restricao) VALUES (1, 6);
INSERT INTO item_restricao (item, restricao) VALUES (1, 7);
INSERT INTO item_restricao (item, restricao) VALUES (2, 2);
INSERT INTO item_restricao (item, restricao) VALUES (3, 1);
INSERT INTO item_restricao (item, restricao) VALUES (3, 2);

-- table restaurante_categoria
INSERT INTO restaurante_categoria (restaurante, categoria) VALUES ('12345678901234', 3);
INSERT INTO restaurante_categoria (restaurante, categoria) VALUES ('98765432109876', 4);

-- table restaurante_ingrediente_alergenico
INSERT INTO restaurante_ingrediente_alergenico (restaurante, ingrediente_alergenico) VALUES ('12345678901234', 13);
INSERT INTO restaurante_ingrediente_alergenico (restaurante, ingrediente_alergenico) VALUES ('98765432109876', 3);
INSERT INTO restaurante_ingrediente_alergenico (restaurante, ingrediente_alergenico) VALUES ('98765432109876', 4);
