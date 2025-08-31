# Projeto Agenda - CRUD

## Script para criação do banco

```sql
DROP DATABASE IF EXISTS agenda;
CREATE DATABASE agenda;

USE agenda;

CREATE TABLE tb_eventos
(
	id_evento int primary key auto_increment not null,
    titulo varchar(255) not null,
    descricao varchar(400) not null,
    data_do_evento date
);
```