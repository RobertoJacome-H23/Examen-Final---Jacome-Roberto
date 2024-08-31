# Proyecto de Gestión de Proyectos, Tareas y Empleados

## Descripción

Aplicación web para la gestión de proyectos, tareas y empleados, desarrollada con React, TypeScript, PrimeReact y MySQL.

Frontend: Utiliza React y TypeScript con PrimeReact para la interfaz de usuario. Implementa componentes para la gestión de proyectos, tareas y empleados, y usa react-router-dom para el enrutamiento.

Backend: Utiliza Express para crear una API REST que interactúa con una base de datos MySQL.

Base de Datos: Configura MySQL para almacenar proyectos, empleados y tareas, utilizando tablas relacionadas.

## Requisitos

- Node.js (v14 o superior)
- MySQL (v8 o superior)

## Configuración

### Frontend

**Instala Dependencias**

     npm install react-router-dom @types/react-router-dom axios primereact primeicons

### Backend

   - Instala las dependencias necesarias: Express, MySQL2, Body-Parser, y CORS.

## Ejecución del Proyecto

1. **Inicia el Servidor Backend**

   ```bash
   cd backend
   node server.js
   ```

2. **Inicia el Frontend**

   ```bash
   cd project-management
   npm start
   ```

## Notas

- Asegúrate de que el servidor MySQL esté en funcionamiento y configurado con las credenciales adecuadas.
- Los componentes y estilos pueden ser ajustados según las necesidades del proyecto.

