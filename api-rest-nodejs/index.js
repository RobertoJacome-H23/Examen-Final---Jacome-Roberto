import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306, // Asegúrate de usar el puerto correcto para MySQL
    database: 'biblioteca'
});

db.connect(error => {
    if (error) {
        console.log("Error al establecer la conexión:", error);
        return;
    }
    console.log("Conexión exitosa");
});

app.listen(3306, () => {
    console.log("Server listening on Port 3306");
});

app.get("/", (req, res) => {
    res.send("Bienvenidos a mi API de gestión de tareas");
});

// Rutas para gestionar tareas
app.get("/tareas", (req, res) => {
    const query = "SELECT * FROM tarea";
    db.query(query, (error, results) => {
        if (error) {
            res.status(500).send('Error al recibir datos');
            return;
        }
        res.status(200).json(results);
    });
});

app.post("/tareas", (req, res) => {
    const { titulo, empleado, descripcion, estado, fecha_creacion } = req.body;
    const query = "INSERT INTO tarea (titulo, empleado, descripcion, estado, fecha_creacion) VALUES (?, ?, ?, ?, ?)";
    db.query(query, [titulo, empleado, descripcion, estado, fecha_creacion], (error, results) => {
        if (error) {
            res.status(500).json('Error al registrar la tarea');
            return;
        }
        res.status(200).json(`Tarea registrada con el ID: ${results.insertId}`);
    });
});

app.put("/tareas/:id", (req, res) => {
    const { id } = req.params;
    const { titulo, empleado, descripcion, estado } = req.body;
    const query = "UPDATE tarea SET titulo = ?, empleado = ?, descripcion = ?, estado = ? WHERE id = ?";

    db.query(query, [titulo, empleado, descripcion, estado, id], (error, results) => {
        if (error) {
            res.status(500).json('Error al actualizar la tarea');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json('Tarea no encontrada');
            return;
        }
        res.status(200).json(`Tarea con ID: ${id} actualizada correctamente`);
    });
});

app.delete("/tareas/:id", (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM tarea WHERE id = ?";

    db.query(query, [id], (error, results) => {
        if (error) {
            res.status(500).json('Error al eliminar la tarea');
            return;
        }
        if (results.affectedRows === 0) {
            res.status(404).json('Tarea no encontrada');
            return;
        }
        res.status(200).json(`Tarea con ID: ${id} eliminada correctamente`);
    });
});
