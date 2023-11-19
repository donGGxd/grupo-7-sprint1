

-- Tabla de Clientes
CREATE TABLE Clientes (
  cliente_id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

-- Tabla de Zapatillas
CREATE TABLE Zapatillas (
  zapatilla_id INT PRIMARY KEY AUTO_INCREMENT,
  marca VARCHAR(50) NOT NULL,
  modelo VARCHAR(50) NOT NULL,
  talla VARCHAR(10) NOT NULL
);

-- Tabla de Relación Cliente_Zapatilla
CREATE TABLE Cliente_Zapatilla (
  cliente_id INT,
  zapatilla_id INT,
  PRIMARY KEY (cliente_id, zapatilla_id),
  FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id),
  FOREIGN KEY (zapatilla_id) REFERENCES Zapatillas(zapatilla_id)
);
