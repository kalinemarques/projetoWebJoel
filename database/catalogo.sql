CREATE DATABASE catalogo;

USE catalogo;

CREATE TABLE filmes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    diretor VARCHAR(100),
    ano_lancamento INT,
    genero VARCHAR(50),
    duracao_minutos INT,
    sinopse TEXT,
    avaliacao DECIMAL(3, 1)
);
