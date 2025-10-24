# ⚡ Guía Rápida - Clase 2: JavaScript

## 🎯 Tu misión

Completar 3 actividades progresivas:
1. ✅ Página interactiva (contador, saludo)
2. ✅ Consumir API pública (Rick and Morty)
3. 🎯 **CRUD con tu API** (EVALUACIÓN 10%)

## 📁 Actividad 1: Interactividad (30 min)

### ¿Qué hacer?

1. Abre `actividad1-interactividad/index.html` en el navegador
2. Abre `actividad1-interactividad/script.js` en VS Code
3. Busca los comentarios `// TODO: ...`
4. Completa el código donde se indica

### TODOs a completar:

- [ ] Actualizar el contador en pantalla
- [ ] Incrementar el contador
- [ ] Decrementar el contador
- [ ] Reiniciar el contador
- [ ] Obtener el nombre del input
- [ ] Mostrar mensaje de saludo
- [ ] Cambiar colores de fondo

### Verificar que funciona:

- ✅ Los botones +, -, 🔄 funcionan
- ✅ El saludo muestra tu nombre
- ✅ Los botones de color cambian el fondo
- ✅ Presionar Enter en el input también saluda

---

## 📁 Actividad 2: API Pública (30 min)

### ¿Qué hacer?

1. Abre `actividad2-api-publica/index.html` en el navegador
2. Abre `actividad2-api-publica/script.js` en VS Code
3. Completa las funciones para consumir la API

### TODOs a completar:

- [ ] Hacer petición con `fetch()`
- [ ] Convertir respuesta a JSON
- [ ] Llamar a `mostrarPersonajes()`
- [ ] Recorrer array de personajes
- [ ] Agregar tarjetas al DOM
- [ ] Limpiar personajes

### Verificar que funciona:

- ✅ Click en "Cargar Personajes" muestra tarjetas
- ✅ Cada tarjeta tiene imagen, nombre, especie
- ✅ Click en "Limpiar" borra las tarjetas

---

## 📁 Actividad 3: CRUD (🎯 EVALUACIÓN 10%)

### ⚠️ IMPORTANTE: Preparación

**ANTES de empezar:**

1. **Inicia tu API de FastAPI:**
   ```bash
   cd tu-proyecto-backend
   uvicorn main:app --reload
   ```

2. **Configura CORS** (ver `INSTRUCCIONES_BACKEND.md`)

3. **Verifica que funciona:**
   - Abre: http://localhost:8000/tareas
   - Deberías ver un JSON

### ¿Qué hacer?

1. Abre `actividad3-crud-tareas/index.html` en el navegador
2. Abre `actividad3-crud-tareas/script.js` en VS Code
3. **Cambia la URL** de la API si es diferente
4. Completa las 4 funciones CRUD

### TODOs a completar (2 puntos cada uno):

- [ ] **GET:** Cargar todas las tareas
- [ ] **POST:** Crear nueva tarea
- [ ] **PUT:** Marcar como completada
- [ ] **DELETE:** Eliminar tarea

### Verificar que funciona:

- ✅ Al abrir la página, se cargan las tareas existentes
- ✅ Puedo crear una tarea nueva con el formulario
- ✅ Puedo marcar una tarea como completada
- ✅ Puedo eliminar una tarea
- ✅ Los cambios persisten (se guardan en el backend)

### Criterios de evaluación:

| Función | Puntos | ¿Funciona? |
|---------|--------|------------|
| GET - Cargar tareas | 2 pts | ⬜ |
| POST - Crear tarea | 2 pts | ⬜ |
| PUT - Completar tarea | 2 pts | ⬜ |
| DELETE - Eliminar tarea | 2 pts | ⬜ |
| Código limpio | 1 pt | ⬜ |
| Subido a GitHub | 1 pt | ⬜ |
| **TOTAL** | **10 pts** | |

---

## 🔧 Debugging (depuración)

### Herramientas:

1. **Consola del navegador (F12):**
   - Ver errores en rojo
   - Ver mensajes con `console.log()`

2. **Network Tab (F12 → Network):**
   - Ver las peticiones HTTP
   - Ver las respuestas de la API

### Errores comunes:

**"CORS policy error"**
→ Configura CORS en FastAPI (ver INSTRUCCIONES_BACKEND.md)

**"Connection refused"**
→ Tu API no está corriendo (inicia con uvicorn)

**"Cannot read property..."**
→ Verifica que la variable existe (usa console.log)

**"Unexpected token..."**
→ Error de sintaxis (revisa paréntesis, llaves, comillas)

---

## 💾 Subir a GitHub

Cuando termines:

```bash
git add .
git commit -m "Completada clase 2: JavaScript y APIs"
git push
```

---

## ⏱️ Tiempo estimado

- **Actividad 1:** ~30 min
- **Actividad 2:** ~30 min
- **Actividad 3:** ~60 min
- **Total:** ~2 horas

---

## 📊 Checklist final

### Antes de entregar la Actividad 3:

- [ ] Mi API de FastAPI está corriendo
- [ ] Configuré CORS correctamente
- [ ] Todas las operaciones CRUD funcionan
- [ ] Probé crear, leer, actualizar y eliminar
- [ ] Mi código está comentado
- [ ] Subí todo a GitHub
- [ ] Hice commit con mensaje claro

---

**¡Mucho éxito!** 🚀

**Siguiente paso:** En la Clase 3 aprenderás Vue.js para hacer esto más fácil y profesional.
