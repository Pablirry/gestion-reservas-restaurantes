# Gestión de Reservas

Aplicación web para la gestión de reservas de mesas en un restaurante. Permite a los usuarios registrarse, iniciar sesión, reservar mesas, gestionar horarios y administrar usuarios y mesas desde una interfaz web.

---

## Tecnologías utilizadas

- **Backend:** Java 17, Spring Boot, Spring Security, Spring Data JPA, JWT, MySQL
- **Frontend:** React, Axios, Material UI
- **Base de datos:** MySQL (compatible con H2 para pruebas)
- **Herramientas:** Maven

---

## Instalación

### 1. Clonar el repositorio

```sh
git clone https://github.com/tuusuario/gestion-reservas.git
cd gestion-reservas
```

### 2. Configurar la base de datos

- Crea una base de datos MySQL llamada `gestion_reservas`.
- Ejecuta el script SQL que encontrarás en `backend/src/main/resources/gestion_reservas.sql` para crear las tablas necesarias.

### 3. Configurar el backend

- Ve a la carpeta `backend`.
- Edita el archivo `src/main/resources/application.properties` y pon tus credenciales de MySQL:

  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/gestion_reservas?useSSL=false&serverTimezone=UTC
  spring.datasource.username=TU_USUARIO
  spring.datasource.password=TU_CONTRASEÑA
  ```

- Instala las dependencias y arranca el backend:

  ```sh
  mvn spring-boot:run -DskipTests
  ```

### 4. Configurar el frontend

- Ve a la carpeta `frontend`.
- Instala las dependencias:

  ```sh
  npm install
  ```

- Arranca la aplicación React:

  ```sh
  npm start
  ```

- Accede a [http://localhost:3000](http://localhost:3000)

---

## Descripción

Esta aplicación permite gestionar reservas de mesas en un restaurante. Los usuarios pueden registrarse, iniciar sesión, ver mesas y horarios disponibles, y realizar reservas. Los administradores pueden gestionar usuarios, mesas y horarios desde el panel de administración.

---

## Licencia

MIT