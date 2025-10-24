# ⚡ Clase 2: JavaScript Interactivo y Consumo de APIs

## 🎯 Objetivo de la clase
Hacer páginas web **interactivas** y conectarlas con **APIs** (incluyendo tu backend de FastAPI).

## 📋 ¿Qué vas a aprender?
- ✅ JavaScript básico (variables, funciones, eventos)
- ✅ Manipular el DOM (cambiar contenido de la página)
- ✅ Responder a clicks y eventos del usuario
- ✅ Consumir APIs con fetch
- ✅ CRUD completo conectado con backend

## 🗂️ Estructura de la clase

Esta clase tiene **3 actividades progresivas**:

```
📁 clase2-javascript/
├── 📄 README.md (este archivo)
├── 📁 actividad1-interactividad/
│   ├── index.html     → Contador, saludo, cambio de colores
│   └── script.js      → Tu JavaScript aquí
├── 📁 actividad2-api-publica/
│   ├── index.html     → Consumir API de Rick and Morty
│   └── script.js      → fetch y mostrar personajes
└── 📁 actividad3-crud-tareas/ (🎯 TALLER EVALUATIVO 10%)
    ├── index.html     → Interfaz del gestor de tareas
    ├── style.css      → Estilos
    └── script.js      → CRUD conectado con FastAPI
```

## 📝 Flujo de trabajo

### Actividad 1: Interactividad básica (30 min)

1. Abre la carpeta `actividad1-interactividad/`
2. Completa `script.js` siguiendo los TODO
3. Prueba en el navegador:
   - Incrementar/decrementar contador
   - Saludo personalizado
   - Cambiar colores de fondo

### Actividad 2: Consumir API pública (30 min)

1. Abre la carpeta `actividad2-api-publica/`
2. Completa `script.js` para:
   - Hacer fetch a la API
   - Procesar los datos
   - Mostrar personajes en tarjetas
3. Observa cómo se cargan los datos desde internet

### Actividad 3: CRUD con FastAPI (40 min) 🎯

**⚠️ Esta es tu evaluación (10%)**

1. **Antes de empezar:**
   - Asegúrate de tener tu API de FastAPI corriendo
   - Configura CORS en FastAPI (instrucciones abajo)

2. Abre la carpeta `actividad3-crud-tareas/`
3. Completa `script.js` para implementar:
   - ✅ GET: Cargar todas las tareas
   - ✅ POST: Crear nueva tarea
   - ✅ PUT: Marcar como completada
   - ✅ DELETE: Eliminar tarea

## 🚀 Configuración de FastAPI para CORS

Antes de conectar el frontend, agrega esto a tu `main.py`:

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permitir todos los orígenes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ... resto de tu código de FastAPI
```

**Luego inicia tu API:**
```bash
cd tu-proyecto-backend
uvicorn main:app --reload
```

## ✅ Checklist por actividad

### Actividad 1: Interactividad
- [ ] El contador aumenta y disminuye correctamente
- [ ] El botón de reiniciar funciona
- [ ] El saludo muestra el nombre ingresado
- [ ] Los botones cambian el color de fondo
- [ ] Entiendo qué hace cada función

### Actividad 2: API Pública
- [ ] Los personajes se cargan al hacer click
- [ ] Se muestran en tarjetas con imagen
- [ ] Entiendo cómo funciona fetch
- [ ] Puedo limpiar la lista

### Actividad 3: CRUD (EVALUACIÓN)
- [ ] Mi API de FastAPI está corriendo
- [ ] Configuré CORS correctamente
- [ ] GET: Puedo ver las tareas existentes
- [ ] POST: Puedo crear nuevas tareas
- [ ] PUT: Puedo marcar tareas como completadas
- [ ] DELETE: Puedo eliminar tareas
- [ ] Los cambios persisten (se guardan en el backend)

## 📤 Entrega (IMPORTANTE)

```bash
# Sube tu trabajo a GitHub:
git add .
git commit -m "Completada clase 2: JavaScript y APIs"
git push
```

**Para la evaluación (Actividad 3):**
- Asegúrate de que todo funcione correctamente
- Tu código debe estar en la carpeta `actividad3-crud-tareas/`
- Verifica que se pueda conectar con FastAPI

## 🎯 Criterios de evaluación (Actividad 3)

| Criterio | Puntos |
|----------|--------|
| GET: Cargar todas las tareas | 2 pts |
| POST: Crear nueva tarea | 2 pts |
| PUT: Marcar como completada | 2 pts |
| DELETE: Eliminar tarea | 2 pts |
| Código limpio y comentado | 1 pt |
| Subido correctamente a GitHub | 1 pt |
| **TOTAL** | **10 pts** |

## 💡 Conceptos clave

### Variables
```javascript
let nombre = "Juan";      // Puede cambiar
const edad = 25;          // No puede cambiar
```

### Funciones
```javascript
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

### Eventos
```javascript
boton.addEventListener("click", () => {
    // Código que se ejecuta al hacer click
});
```

### Fetch (GET)
```javascript
fetch("URL_API")
    .then(res => res.json())
    .then(datos => console.log(datos));
```

### Fetch (POST)
```javascript
fetch("URL_API", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre: "Tarea nueva" })
})
    .then(res => res.json())
    .then(datos => console.log(datos));
```

## 🆘 Solución de problemas

### JavaScript no funciona
- ✅ Abre la consola (F12 → Console)
- ✅ Busca mensajes de error en rojo
- ✅ Verifica que completaste todas las funciones

### No se conecta con FastAPI
- ✅ FastAPI debe estar corriendo (uvicorn)
- ✅ Verifica la URL (http://localhost:8000)
- ✅ Configuraste CORS en FastAPI
- ✅ Revisa la consola del navegador

### CORS Error
```
Access to fetch has been blocked by CORS policy
```
**Solución:** Agrega el middleware CORS a FastAPI (ver arriba)

## 🎓 Recursos útiles

**APIs públicas para practicar:**
- Rick and Morty: https://rickandmortyapi.com/
- JSONPlaceholder: https://jsonplaceholder.typicode.com/
- PokeAPI: https://pokeapi.co/

**Documentación:**
- MDN JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript
- Fetch API: https://developer.mozilla.org/es/docs/Web/API/Fetch_API

---

**¡Éxito con tus primeras aplicaciones interactivas!** 🚀
