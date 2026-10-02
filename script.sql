CREATE DATABASE futscript;
\c futscript;

CREATE TABLE equipos (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE posiciones (id SERIAL PRIMARY KEY, name VARCHAR(250) NOT NULL);

CREATE TABLE jugadores (id SERIAL PRIMARY KEY, id_equipo INT REFERENCES equipos(id), name VARCHAR(250), position INT REFERENCES posiciones(id));

CREATE TABLE usuarios (id serial PRIMARY KEY, username VARCHAR(50) NOT NULL UNIQUE, password VARCHAR(70) NOT NULL UNIQUE);

INSERT INTO equipos values (DEFAULT, 'equipo 1');

INSERT INTO posiciones values
(DEFAULT, 'delantero'),
(DEFAULT, 'centrocampista'),
(DEFAULT, 'defensa'),
(DEFAULT, 'portero');

INSERT INTO usuarios values (DEFAULT, 'admin', '1234');

SELECT * FROM equipos;

SELECT * FROM jugadores;

SELECT * FROM posiciones;

SELECT * FROM usuarios;
