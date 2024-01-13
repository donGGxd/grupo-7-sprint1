
CREATE DATABASE db_zapatillas;
USE db_zapatillas;

-- tabla tipo_clientes
  CREATE TABLE tipo_clientes(
  id_tipo INT UNSIGNED NOT NULL AUTO_INCREMENT,
  tipo VARCHAR(45) NOT NULL,
  descripcion VARCHAR(255) NULL,
  PRIMARY KEY (id_tipo)
  );
  
  
  -- tabla marcas
  CREATE TABLE marcas(
  id_marca INT UNSIGNED NOT NULL AUTO_INCREMENT,
  tipo_marca VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_marca)
  );

  -- tabla talles
  CREATE TABLE talles(
  id_talle INT UNSIGNED NOT NULL AUTO_INCREMENT,
  talle VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_talle));
  
-- tabla colores
CREATE TABLE colores(
  id_color INT UNSIGNED NOT NULL AUTO_INCREMENT,
  tipo_color VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_color)
  );
  
    -- tabla clientes
  CREATE TABLE clientes(
  id_clientes INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  dni INT(10) NOT NULL,
  fecha_nacimiento DATE NULL,
  contraseña VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  tipo_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_clientes),
  UNIQUE INDEX email_UNIQUE (email ASC),
  FOREIGN KEY(tipo_id) REFERENCES tipo_clientes(id_tipo)
  );
  
  
   -- tabla zapatillas
  CREATE TABLE zapatillas(
  id_zapatillas INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  descripcion VARCHAR(200) NOT NULL,
  descuento varchar(45) DEFAULT NULL,
  marca_id INT UNSIGNED NOT NULL,
  talle_id INT UNSIGNED NOT NULL,
  color_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_zapatillas),
  FOREIGN KEY(marca_id) REFERENCES marcas(id_marca),
  FOREIGN KEY(talle_id) REFERENCES talles(id_talle),
  FOREIGN KEY(color_id) REFERENCES colores(id_color)
  );



-- tabla carrito
CREATE TABLE carrito(
  id_carrito INT UNSIGNED NOT NULL AUTO_INCREMENT,
  cantidad INT NOT NULL,
  importe INT NOT NULL,
  zapatillas_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_carrito),
  FOREIGN KEY(zapatillas_id) REFERENCES zapatillas(id_zapatillas)
 );
  
  -- tabla venta
  CREATE TABLE venta(
  id_venta INT UNSIGNED NOT NULL AUTO_INCREMENT,
  detalle VARCHAR(255) NULL,
  fecha DATE NOT NULL,
  total FLOAT NOT NULL,
  clientes_id INT UNSIGNED NOT NULL,
  carrito_id INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_venta),
  FOREIGN KEY (clientes_id) REFERENCES clientes(id_clientes),
  FOREIGN KEY (carrito_id) REFERENCES carrito(id_carrito)
  );