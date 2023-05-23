FROM mysql:8.0

# Configurações opcionais do MySQL (se necessário)
# COPY my.cnf /etc/mysql/conf.d/my.cnf

# Porta padrão do MySQL
EXPOSE 3306

# Variáveis de ambiente
ENV MYSQL_ALLOW_EMPTY_PASSWORD=True

# Copiar arquivos SQL para inicialização (se necessário)
COPY *.sql /docker-entrypoint-initdb.d/
