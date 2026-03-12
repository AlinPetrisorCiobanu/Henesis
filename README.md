# Henesis Frontend

Frontend oficial de **Henesis**, una aplicación web para la gestión de proyectos y recursos visuales.  
Este cliente está construido con **React** y se conecta a un backend seguro desplegado en producción.

---

## 🌐 Demo

Frontend: [https://henesis.es](https://henesis.es)

> ⚠️ Los endpoints del backend no se exponen en el repositorio por motivos de seguridad.

---

## 🚀 Tecnologías utilizadas

- **React** + **Vite**
- **Axios** para consumo de API
- **CSS3** con diseño responsive
- **JavaScript ES6**
- Arquitectura modular (componentes, páginas, API)

---
src
│
├── api # Funciones para conectar con el backend (axios)
│ └── userApi.js
│
├── components # Componentes reutilizables (NavBar, Inputs, etc.)
│
├── pages
│ ├── home
│ ├── login
│ └── register # Formulario de registro de usuarios
│
├── styles # Archivos CSS globales y de componentes
└── App.jsx # Punto de entrada del frontend


---

## ⚙️ Instalación local

Clonar el repositorio:

```bash
git clone https://github.com/tuusuario/henesis-frontend.git

cd henesis-frontend
npm install

npm run dev

http://localhost:5173



📱 Diseño responsive

El frontend está diseñado para adaptarse a:

📱 móviles

📲 tablets

💻 escritorio

🖥 pantallas grandes

Incluye formularios modernos y animaciones suaves.




👤 Funcionalidades actuales

Registro de usuarios

Conexión con API REST

Diseño responsive y limpio

Arquitectura modular en React



Funcionalidades en desarrollo

Login de usuarios

Panel de administración

Gestión de proyectos

Subida de imágenes

Autenticación JWT y roles



🔐 Seguridad

Las contraseñas se manejan de forma segura en el backend (hash + salt + pepper)

La comunicación con el backend está protegida mediante CORS y buenas prácticas

Variables sensibles y secretos no se exponen en el repositorio



👨‍💻 Autor

Desarrollado por Alin Petrisor Ciobanu, proyecto real de Henesis.





📄 Licencia

Este proyecto está bajo licencia MIT.


---

Si quieres, puedo hacer una **versión todavía más profesional y atractiva** que incluya:

- Badges de tecnologías (React, Vite, Axios, etc.)  
- Capturas de pantalla del frontend  
- Diagrama simple de arquitectura (Frontend ↔ Backend ↔ Base de datos)  
- Sección de “Cómo desplegar en producción”  

Quedaría un README **tipo startup real**, ideal para mostrar en tu GitHub o portfolio.  

¿Quieres que haga esa versión?