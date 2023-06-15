-- table cliente
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('12345678900', 'João Silva', '987654321', 1);
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('98765432100', 'Maria Santos', '123456789', 2);
INSERT INTO cliente (cpf, nome, telefone, user) 
VALUES ('55555555555', 'Pedro Oliveira', '111111111', 3);

-- table endereco 
INSERT INTO endereco (bairro, cep, complemento, numero, rua) 
VALUES ('Centro', '12345-678', 'Bloco A', 10, 'Rua Principal');
INSERT INTO endereco (bairro, cep, complemento, numero, rua) 
VALUES ('Bairro do Parque', '98765-432', 'Apartamento 302', 15, 'Rua das Flores');
INSERT INTO endereco (bairro, cep, complemento, numero, rua) 
VALUES ('Vila Nova', '54321-876', 'Casa 5', 5, 'Rua dos Coqueiros');
INSERT INTO endereco (bairro, cep, complemento, numero, rua) 
VALUES ('Jardim das Flores', '76543-210', 'Casa 8', 8, 'Rua das Violetas');
INSERT INTO endereco (bairro, cep, complemento, numero, rua) 
VALUES ('Centro Comercial', '98765-432', 'Loja 105', 105, 'Avenida Principal');


-- table restaurante
INSERT INTO restaurante (cnpj, horario_abertura, horario_fechamento, nome_fantasia, razao_social, taxa_entrega, telefone, endereco, user) 
VALUES ('12345678901234', '10:00:00', '20:00:00', 'Restaurante A', 'Empresa A Ltda.', 5.99, '987654321', 1, 4);
INSERT INTO restaurante (cnpj, horario_abertura, horario_fechamento, nome_fantasia, razao_social, taxa_entrega, telefone, endereco, user) 
VALUES ('98765432109876', '11:30:00', '22:00:00', 'Restaurante B', 'Empresa B Ltda.', 3.99, '123456789', 2, 5);

-- table item(a foto é fictícia)
INSERT INTO item (descricao, foto, nome, preco, tipo, restaurante) 
VALUES ('Hambúrguer delicioso', 'hamburguer.jpg', 'Cheeseburger', 12.99, 'Lanche', 1);
INSERT INTO item (descricao, foto, nome, preco, tipo, restaurante) 
VALUES ('Pizza saborosa', 'pizza.jpg', 'Margherita', 15.99, 'Pizza', 1);
INSERT INTO item (descricao, foto, nome, preco, tipo, restaurante) 
VALUES ('Sushi fresco', 'sushi.jpg', 'Salmão Nigiri', 9.99, 'Sushi', 1);

-- table favoritos
INSERT INTO favoritos (quantidade, valor, item) 
VALUES (2, 25.98, 1);
INSERT INTO favoritos (quantidade, valor, item) 
VALUES (1, 15.99, 2);
INSERT INTO favoritos (quantidade, valor, item) 
VALUES (3, 29.97, 3);

-- table cliente-pedidos
INSERT INTO cliente_pedidos (cliente_id, pedidos_id) 
VALUES (1, 1);
INSERT INTO cliente_pedidos (cliente_id, pedidos_id) 
VALUES (2, 2);
INSERT INTO cliente_pedidos (cliente_id, pedidos_id) 
VALUES (2, 3);
