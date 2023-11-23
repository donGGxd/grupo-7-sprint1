
CREATE DATABASE db_zapatillas;
USE db_zapatillas;
-- tabla clientes
CREATE TABLE clientes (
  id_clientes INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  dni INT(10) NOT NULL,
  fecha_nacimiento DATE NULL,
  contraseña VARCHAR(45) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  id_tipo INT(10) UNSIGNED NULL,
  PRIMARY KEY (id_clientes),
  UNIQUE INDEX email_UNIQUE (email ASC) );

-- tabla tipo_clientes
  CREATE TABLE tipo_clientes (
  id_tipo INT NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(45) NOT NULL,
  descripcion VARCHAR(255) NULL,
  PRIMARY KEY (id_tipo));

-- tabla venta
  CREATE TABLE venta (
  id_venta INT NOT NULL AUTO_INCREMENT,
  detalle VARCHAR(255) NULL,
  fecha DATE NOT NULL,
  total INT NOT NULL,
  id_clientes INT UNSIGNED NULL,
  id_carrito INT UNSIGNED NULL,
  PRIMARY KEY (id_venta));

-- tabla carrito
CREATE TABLE carrito (
  id_carrito INT NOT NULL AUTO_INCREMENT,
  cantidad INT NOT NULL,
  importe INT NOT NULL,
  id_zapatillas INT UNSIGNED NULL,
  PRIMARY KEY (id_carrito));

  -- tabla zapatillas
  CREATE TABLE zapatillas (
  id_zapatillas INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  descuento varchar(45) DEFAULT NULL,
  id_marca INT UNSIGNED NULL,
  id_talle INT UNSIGNED NULL,
  id_color INT UNSIGNED NULL,
  PRIMARY KEY (id_zapatillas));

  -- tabla marcas
  CREATE TABLE marcas (
  id_marca INT NOT NULL AUTO_INCREMENT,
  tipo_marca VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_marca));

  -- tabla talles
  CREATE TABLE talles (
  id_talle INT NOT NULL AUTO_INCREMENT,
  talle VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_talle));

-- tabla colores
CREATE TABLE colores (
  id_color INT NOT NULL AUTO_INCREMENT,
  tipo_color VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_color));