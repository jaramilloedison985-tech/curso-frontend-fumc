# 📁 Estructura del Proyecto - Repositorio Estudiante

## 🎯 Filosofía del diseño

Este repositorio está diseñado para que los estudiantes **aprendan haciendo**, no copiando código de otros lados.

**Principios:**
1. ✅ Archivos con estructura base completa
2. ✅ Comentarios `TODO` claros donde deben escribir
3. ✅ Instrucciones paso a paso en README
4. ✅ Código de ejemplo comentado para entender
5. ✅ Verificación clara de qué debe funcionar

---

## 🗂️ Estructura completa

```
📁 curso-frontend-fumc/
│
├── 📄 README.md
│   └── Información general, estructura del curso, evaluaciones
│
├── 📄 PRIMEROS_PASOS.md
│   └── Guía de configuración inicial (clonar, abrir, etc.)
│
├── 📄 ESTRUCTURA_PROYECTO.md (este archivo)
│   └── Documentación de la estructura para el docente
│
├── 📄 GUIA_PARA_DOCENTE.md
│   └── Metodología de enseñanza, consejos, solución de problemas
│
├── 📄 .gitignore
│   └── Archivos a ignorar por Git
│
├── 📁 clase1-html-css/
│   ├── 📄 README.md
│   │   └── Instrucciones paso a paso de la clase
│   ├── 📄 GUIA_RAPIDA.md
│   │   └── Resumen ejecutivo: qué hacer, cuánto tarda
│   ├── 📄 index.html
│   │   └── HTML con TODOs para completar
│   └── 📄 style.css
│       └── CSS con comentarios explicativos y TODOs
│
├── 📁 clase2-javascript/
│   ├── 📄 README.md
│   │   └── Instrucciones generales de las 3 actividades
│   ├── 📄 GUIA_RAPIDA.md
│   │   └── Resumen ejecutivo con checklist
│   │
│   ├── 📁 actividad1-interactividad/
│   │   ├── 📄 index.html (completo, listo para usar)
│   │   └── 📄 script.js (con TODOs para completar)
│   │
│   ├── 📁 actividad2-api-publica/
│   │   ├── 📄 index.html (completo, listo para usar)
│   │   └── 📄 script.js (con TODOs para completar)
│   │
│   └── 📁 actividad3-crud-tareas/ (🎯 EVALUACIÓN 10%)
│       ├── 📄 README.md (instrucciones específicas)
│       ├── 📄 INSTRUCCIONES_BACKEND.md (cómo configurar FastAPI)
│       ├── 📄 index.html (completo)
│       ├── 📄 style.css (completo)
│       └── 📄 script.js (con TODOs para completar - 4 operaciones CRUD)
│
└── 📁 clase3-vue-fundamentos/
    └── 📄 README.md (placeholder para futuro)
```

---

## 📝 Tipo de archivos y su propósito

### Archivos raíz

| Archivo | Propósito | Audiencia |
|---------|-----------|-----------|
| `README.md` | Información general del curso | Estudiantes |
| `PRIMEROS_PASOS.md` | Setup inicial y configuración | Estudiantes (primera vez) |
| `GUIA_PARA_DOCENTE.md` | Metodología de enseñanza | Docente |
| `ESTRUCTURA_PROYECTO.md` | Documentación de estructura | Docente/Mantenimiento |
| `.gitignore` | Archivos a ignorar en Git | Sistema |

### Por cada clase

| Archivo | Propósito | Contenido |
|---------|-----------|-----------|
| `README.md` | Instrucciones detalladas | Objetivos, pasos, recursos |
| `GUIA_RAPIDA.md` | Resumen ejecutivo | Checklist, tiempo, verificación |
| `index.html` | Archivo principal | Estructura completa, algunos TODOs |
| `style.css` | Estilos | CSS completo con comentarios |
| `script.js` | JavaScript | Funciones con TODOs para completar |

---

## 🎨 Diseño de archivos con TODO

### Principio: "Completa, no copies"

**❌ Malo:** Darles solo instrucciones y que escriban todo desde cero
- Genera frustración
- Errores de sintaxis frecuentes
- Se pierden en detalles

**✅ Bueno:** Darles estructura con TODOs específicos
- Ven código funcionando
- Entienden el contexto
- Se enfocan en la lógica

### Ejemplo de TODO bien diseñado:

```javascript
// ❌ MAL: Muy vago
// TODO: Implementa la función

// ✅ BIEN: Específico con pista
// TODO: Haz una petición GET a la API
// Pista: const respuesta = await fetch(API_URL);
```

### Niveles de dificultad:

**Nivel 1 - Clase 1 (HTML/CSS):**
```html
<!-- TODO: Escribe tu nombre completo aquí -->
<h2>Tu Nombre Completo</h2>
```
→ Solo llenar espacios con texto

**Nivel 2 - Clase 2 Actividad 1 (JS básico):**
```javascript
// TODO: Aumenta el contador en 1
// Pista: contador = contador + 1; o puedes usar contador++;
contador++;
```
→ Una línea de código simple

**Nivel 3 - Clase 2 Actividad 2 (API):**
```javascript
// TODO: Haz una petición GET a la API
// Pista: const respuesta = await fetch(API_URL);
const respuesta = await fetch(API_URL);
```
→ Usar conceptos nuevos con ejemplo

**Nivel 4 - Clase 2 Actividad 3 (CRUD):**
```javascript
// TODO: Haz una petición POST a tu API
// Recuerda incluir: method, headers y body
/*
Pista:
const respuesta = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(nuevaTarea)
});
*/
```
→ Bloques completos con estructura de ejemplo

---

## 🎯 Evaluaciones integradas

### Actividad 3 - Clase 2 (10%)

**Diseño:**
- Todas las funciones tienen TODOs
- Checklist clara de verificación
- Instrucciones de configuración del backend
- Criterios de evaluación explícitos

**Criterios (en el código):**
```javascript
/*
Criterios de evaluación:
- GET: Cargar todas las tareas (2 pts)
- POST: Crear nueva tarea (2 pts)
- PUT: Marcar como completada (2 pts)
- DELETE: Eliminar tarea (2 pts)
- Código limpio y comentado (1 pt)
- Subido correctamente a GitHub (1 pt)
*/
```

**Verificación para el docente:**
1. Clonar repo del estudiante
2. Iniciar su API de FastAPI
3. Abrir `actividad3-crud-tareas/index.html`
4. Probar cada operación CRUD
5. Verificar código en `script.js`

---

## 📊 Progresión de dificultad

### Clase 1: Fundamentos
- **Complejidad:** Baja
- **Tiempo:** 2-3 horas
- **TODOs:** Llenar texto, cambiar valores
- **Evaluación:** No evaluativa (práctica)

### Clase 2: JavaScript
- **Complejidad:** Media-Alta
- **Tiempo:** 3-4 horas
- **TODOs:** Escribir funciones, usar APIs
- **Evaluación:** Actividad 3 (10%)

### Clase 3: Vue.js (futuro)
- **Complejidad:** Media
- **Tiempo:** Por definir
- **TODOs:** Por diseñar
- **Evaluación:** Por definir

---

## 🔄 Flujo de trabajo del estudiante

```
1. Clonar repositorio
   ↓
2. Abrir clase1-html-css/
   ↓
3. Leer README.md
   ↓
4. Abrir index.html
   ↓
5. Buscar TODOs
   ↓
6. Completar información
   ↓
7. Guardar (Ctrl + S)
   ↓
8. Abrir en navegador
   ↓
9. Ver cambios
   ↓
10. Experimentar con CSS
    ↓
11. git add, commit, push
    ↓
12. Pasar a clase2-javascript/
    ↓
    (Repetir proceso)
```

---

## 🛠️ Mantenimiento y actualización

### Para agregar una nueva clase:

1. **Crear carpeta:**
   ```
   clase#-nombre-descriptivo/
   ```

2. **Archivos mínimos:**
   - `README.md` (instrucciones completas)
   - `GUIA_RAPIDA.md` (resumen ejecutivo)
   - Archivos de código con TODOs

3. **Seguir el patrón:**
   - Estructura completa, no vacía
   - Comentarios TODOs claros
   - Verificación de funcionalidad
   - Tiempo estimado

4. **Actualizar:**
   - README.md principal (agregar a lista)
   - ESTRUCTURA_PROYECTO.md (este archivo)
   - GUIA_PARA_DOCENTE.md (metodología)

### Para modificar archivos existentes:

1. **Mantén la filosofía:**
   - No elimines estructura base
   - No hagas TODOs muy vagos
   - No compliques innecesariamente

2. **Prueba siempre:**
   - Completa los TODOs tú mismo
   - Verifica que funcione
   - Verifica el tiempo estimado

3. **Documenta cambios:**
   - Actualiza README.md de la clase
   - Actualiza GUIA_RAPIDA.md
   - Anota en GUIA_PARA_DOCENTE.md

---

## 📈 Métricas de éxito

### Indicadores de que el diseño funciona:

✅ **Estudiantes avanzan sin trabarse**
- No preguntan "¿qué tengo que hacer?"
- Encuentran los TODOs fácilmente

✅ **Tiempo estimado es preciso**
- La mayoría termina en el tiempo indicado
- No hay quejas de "muy largo" o "muy corto"

✅ **Pueden verificar por sí mismos**
- Checklist claro de funcionalidad
- Saben si lo hicieron bien

✅ **Código funcional al terminar**
- No errores de sintaxis básicos
- Aplicación funciona correctamente

### Indicadores de problemas:

❌ **Muchas preguntas de sintaxis**
→ Dar más estructura base

❌ **No entienden qué hacer**
→ Mejorar comentarios y pistas

❌ **No terminan a tiempo**
→ Reducir TODOs o dar más código base

❌ **Copian de otros**
→ Hacer TODOs más personalizados

---

## 🎓 Próximas clases por diseñar

**Pendientes:**
- Clase 3: Vue.js fundamentos
- Clase 4: Componentes Vue
- Clase 5: CRUD con Vue (Evaluación 15%)
- Clase 6: Vue Router
- Clase 7: Vuex/Pinia (Evaluación 15%)
- Clase 8: UI/UX
- Clase 9: Deployment (Proyecto final 30%)

**Patrón a seguir:**
- Misma estructura de carpetas
- README.md + GUIA_RAPIDA.md
- Archivos con TODOs progresivos
- Evaluaciones integradas en actividades

---

## 📞 Notas finales

Este diseño busca:
1. ✅ Minimizar frustración por errores tontos
2. ✅ Maximizar aprendizaje de conceptos
3. ✅ Hacer el progreso visible e inmediato
4. ✅ Facilitar la evaluación del docente
5. ✅ Crear autonomía en el estudiante

**Filosofía:** "Hazlo fácil de empezar, difícil de hacer mal."

---

**Última actualización:** Octubre 2025  
**Versión:** 1.0  
**Estado:** Clases 1-2 completas | Clase 3+ pendientes
