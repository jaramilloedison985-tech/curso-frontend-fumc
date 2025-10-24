# 🚀 Primeros Pasos - Configuración Inicial

## ¡Bienvenido al curso de Frontend! 🎉

Este documento te guiará en la configuración inicial de tu entorno de trabajo.

## ✅ Requisitos previos

Antes de empezar, asegúrate de tener:

- [ ] **Git** instalado en tu computadora
- [ ] **VS Code** (o cualquier editor de código)
- [ ] **Navegador web** (Chrome, Firefox o Edge)
- [ ] **Cuenta de GitHub** creada

## 📥 Paso 1: Clonar el repositorio

### Opción A: Clonar desde GitHub (si ya existe en tu cuenta)

1. Ve a tu repositorio en GitHub
2. Click en el botón verde "Code"
3. Copia la URL (debe ser algo como: `https://github.com/TU-USUARIO/curso-frontend-fumc.git`)

4. Abre tu terminal (PowerShell, CMD, o Git Bash) y ejecuta:

```bash
# Navega a donde quieras guardar el proyecto
cd Documentos  # o la carpeta que prefieras

# Clona el repositorio
git clone https://github.com/TU-USUARIO/curso-frontend-fumc.git

# Entra a la carpeta
cd curso-frontend-fumc
```

### Opción B: Fork del repositorio del docente

Si el docente te compartió un repositorio:

1. Ve al repositorio del docente
2. Click en "Fork" (arriba a la derecha)
3. Esto crea una copia en tu cuenta
4. Luego clona TU copia siguiendo la Opción A

## 💻 Paso 2: Abrir en VS Code

```bash
# Desde la terminal, dentro de la carpeta del proyecto:
code .
```

O también puedes:
1. Abrir VS Code
2. File → Open Folder
3. Seleccionar la carpeta `curso-frontend-fumc`

## 🔍 Paso 3: Explorar la estructura

Deberías ver esta estructura:

```
📁 curso-frontend-fumc/
├── 📄 README.md (información general)
├── 📄 PRIMEROS_PASOS.md (este archivo)
├── 📁 clase1-html-css/
├── 📁 clase2-javascript/
└── 📁 clase3-vue-fundamentos/
```

## 🎯 Paso 4: Comenzar con la Clase 1

1. **Abre la carpeta** `clase1-html-css`
2. **Lee el README.md** de esa carpeta
3. **Abre `index.html`** en VS Code
4. **Busca los comentarios** `<!-- TODO: ... -->`
5. **Completa tu información** donde se indica

## 🌐 Paso 5: Ver tu página en el navegador

Hay 3 formas:

### Método 1: Doble clic (más fácil)
1. Ve a la carpeta `clase1-html-css` en el explorador de archivos
2. Doble clic en `index.html`
3. Se abre en tu navegador

### Método 2: Arrastrar
1. Abre tu navegador
2. Arrastra el archivo `index.html` a la ventana del navegador

### Método 3: Live Server (recomendado - requiere extensión)
1. Instala la extensión "Live Server" en VS Code
2. Right-click en `index.html` → "Open with Live Server"
3. **Ventaja:** Se actualiza automáticamente al guardar

## 🔄 Paso 6: Guardar cambios en Git

Después de completar una clase:

```bash
# Ver qué archivos cambiaron
git status

# Agregar todos los cambios
git add .

# Hacer commit con un mensaje descriptivo
git commit -m "Completada clase 1: Mi tarjeta de presentación"

# Subir cambios a GitHub
git push
```

## 🛠️ Herramientas útiles

### Extensiones recomendadas para VS Code:

1. **Live Server** - Recarga automática
   - Buscar en extensiones: "Live Server"
   - Instalar la de Ritwick Dey

2. **Prettier** - Formatear código automáticamente
   - Buscar: "Prettier - Code formatter"

3. **Auto Rename Tag** - Renombra etiquetas HTML automáticamente
   - Buscar: "Auto Rename Tag"

### Atajos de teclado útiles:

- `Ctrl + S` → Guardar archivo
- `Ctrl + /` → Comentar/descomentar línea
- `Ctrl + Shift + P` → Paleta de comandos
- `Ctrl + B` → Mostrar/ocultar barra lateral
- `Alt + Shift + F` → Formatear código

## 🆘 Problemas comunes

### "No puedo ver mi página web"
- ✅ Verifica que guardaste el archivo (Ctrl + S)
- ✅ Recarga el navegador (F5)
- ✅ Asegúrate de abrir el archivo correcto

### "Git no funciona"
- ✅ Verifica que instalaste Git: `git --version`
- ✅ Configura tu nombre y email:
  ```bash
  git config --global user.name "Tu Nombre"
  git config --global user.email "tu@email.com"
  ```

### "No puedo hacer push"
- ✅ Verifica que hiciste commit primero
- ✅ Verifica que tienes permisos en el repositorio
- ✅ Si te pide contraseña, usa un Personal Access Token de GitHub

## 📚 Recursos adicionales

**Aprender Git:**
- https://learngitbranching.js.org/ (interactivo)
- https://git-scm.com/book/es/v2 (libro oficial)

**Aprender HTML/CSS:**
- https://www.w3schools.com/
- https://developer.mozilla.org/es/

**Práctica:**
- https://codepen.io/ (editor online)
- https://jsfiddle.net/ (probar código rápidamente)

## ✅ Checklist inicial

Antes de empezar la Clase 1, verifica:

- [ ] Cloné el repositorio correctamente
- [ ] Puedo abrir el proyecto en VS Code
- [ ] Puedo ver `index.html` en el navegador
- [ ] Git está configurado con mi nombre y email
- [ ] Entiendo cómo guardar cambios (Ctrl + S)
- [ ] Entiendo cómo recargar el navegador (F5)

## 🎓 ¡Listo para empezar!

Ahora ve a la carpeta `clase1-html-css` y sigue las instrucciones del README.md

**¡Mucho éxito en tu aprendizaje!** 🚀

---

**¿Tienes dudas?** Pregunta al docente o compañeros en clase.
