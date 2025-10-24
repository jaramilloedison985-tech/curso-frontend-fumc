# 🎨 Clase 1: Introducción a HTML y CSS

## 🎯 Objetivo de la clase
Crear tu primera página web: una **tarjeta de presentación personal** usando HTML y CSS.

## 📋 ¿Qué vas a aprender?
- ✅ Estructura básica de HTML
- ✅ Etiquetas principales (h1, p, div, img, etc.)
- ✅ Dar estilo con CSS
- ✅ Colores, fuentes, espaciado
- ✅ Ver cambios en tiempo real

## 🛠️ Preparación

### 1. Abre esta carpeta en VS Code
```bash
cd clase1-html-css
code .
```

### 2. Archivos de la clase
- `index.html` → Aquí completarás tu HTML
- `style.css` → Aquí agregarás tus estilos
- `README.md` → Este archivo con instrucciones

## 📝 Pasos a seguir

### Paso 1: Completa el HTML (30 min)

Abre `index.html` y busca los comentarios `<!-- TODO: ... -->`. 

**Completa:**
1. Tu nombre completo
2. Tu descripción personal
3. Tus habilidades
4. Tu información de contacto

### Paso 2: Personaliza los estilos (30 min)

Abre `style.css` y experimenta:

1. **Cambia los colores** de la tarjeta
2. **Modifica los tamaños** de letra
3. **Ajusta los espacios** (padding/margin)
4. **Prueba diferentes fuentes**

### Paso 3: Ver tu página

Hay 3 formas de abrir tu página:

**Opción 1: Doble clic**
- Ve a la carpeta y haz doble clic en `index.html`

**Opción 2: Live Server (recomendado)**
- Right-click en `index.html` → "Open with Live Server"
- Se actualiza automáticamente al guardar

**Opción 3: Arrastrar al navegador**
- Arrastra `index.html` a Chrome/Firefox

## 🎨 Retos opcionales

Una vez que completes lo básico, intenta:

1. **Cambiar el degradado de fondo:**
   ```css
   background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
   ```

2. **Agregar una nueva sección:**
   ```html
   <div class="info">
       <h3>Hobbies</h3>
       <p>Escribe tus hobbies aquí</p>
   </div>
   ```

3. **Hacer que la tarjeta crezca al pasar el mouse:**
   ```css
   .card:hover {
       transform: scale(1.05);
       transition: all 0.3s;
   }
   ```

4. **Cambiar la imagen de perfil:**
   - Descarga una imagen
   - Guárdala en esta carpeta (ej: `mi-foto.jpg`)
   - Cambia el src: `<img src="mi-foto.jpg" alt="Mi foto">`

## ✅ Checklist antes de terminar

- [ ] Completé todos los TODO del HTML
- [ ] Agregué mi información personal
- [ ] La página se ve bien en el navegador
- [ ] Experimenté con al menos 3 cambios de CSS
- [ ] Guardé todos los archivos

## 📤 Entrega

```bash
# Sube tu trabajo a GitHub:
git add .
git commit -m "Completada clase 1: Mi tarjeta de presentación"
git push
```

## 🎨 Recursos útiles

**Paletas de colores:**
- Coolors: https://coolors.co/
- Flat UI Colors: https://flatuicolors.com/

**Fuentes gratuitas:**
- Google Fonts: https://fonts.google.com/

**Inspiración:**
- Dribbble: https://dribbble.com/

## 💡 Consejos

- 💾 **Guarda frecuentemente** (Ctrl + S)
- 🔄 **Recarga el navegador** después de cada cambio (F5)
- 🎨 **Experimenta** con colores y tamaños
- ❓ **Pregunta** si algo no funciona

---

**¡Diviértete creando tu primera página web!** 🚀
