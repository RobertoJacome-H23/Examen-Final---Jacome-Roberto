CREATE TABLE tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    empleado VARCHAR(255) NOT NULL,
    descripcion TEXT,
    estado ENUM('pendiente', 'completado') NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);
