/* ========================================
   ⚡ ACTIVIDAD 1: INTERACTIVIDAD CON JAVASCRIPT
   ========================================

   Instrucciones:
   1. Lee cada sección y entiende qué hace
   2. Completa los espacios marcados con TODO
   3. Guarda el archivo (Ctrl + S)
   4. Recarga el navegador (F5) para ver los cambios
   5. Abre la consola (F12) para ver mensajes y errores
*/

console.log("✅ Script cargado correctamente");

// ========================================
// SECCIÓN 1: CONTADOR
// ========================================

// Variable para guardar el valor del contador
let contador = 0;

// Seleccionar elementos del HTML
const displayContador = document.querySelector("#contador");
const btnIncrementar = document.querySelector("#btnIncrementar");
const btnDecrementar = document.querySelector("#btnDecrementar");
const btnReiniciar = document.querySelector("#btnReiniciar");

// Función para actualizar el número en pantalla
function actualizarContador() {
    // TODO: Cambia el texto del displayContador para mostrar el valor de 'contador'
    // Pista: usa displayContador.textContent = ...

    displayContador.textContent = contador;
}

// Evento: cuando hago click en "Incrementar"
btnIncrementar.addEventListener("click", () => {
    // TODO: Aumenta el contador en 1
    // Pista: contador = contador + 1; o puedes usar contador++;

    contador++;
    actualizarContador();
    console.log("Contador incrementado:", contador);
});

// Evento: cuando hago click en "Decrementar"
btnDecrementar.addEventListener("click", () => {
    // TODO: Disminuye el contador en 1
    // Pista: contador = contador - 1; o puedes usar contador--;

    contador--;
    actualizarContador();
    console.log("Contador decrementado:", contador);
});

// Evento: cuando hago click en "Reiniciar"
btnReiniciar.addEventListener("click", () => {
    // TODO: Reinicia el contador a 0

    contador = 0;
    actualizarContador();
    console.log("Contador reiniciado");
});

// ========================================
// SECCIÓN 2: SALUDO PERSONALIZADO
// ========================================

// Seleccionar elementos
const inputNombre = document.querySelector("#inputNombre");
const btnSaludar = document.querySelector("#btnSaludar");
const resultadoSaludo = document.querySelector("#resultadoSaludo");

// Evento: cuando hago click en "Saludar"
btnSaludar.addEventListener("click", () => {
    // TODO: Obtén el valor del input
    // Pista: const nombre = inputNombre.value;

    const nombre = inputNombre.value;

    // Validación: verificar que el nombre no esté vacío
    if (nombre === "" || nombre.trim() === "") {
        // TODO: Muestra un mensaje de error si el nombre está vacío
        // Pista: usa resultadoSaludo.innerHTML = "Mensaje aquí";

        resultadoSaludo.innerHTML = "⚠️ Por favor, escribe tu nombre";
        resultadoSaludo.classList.add("mostrar");
        return; // Salir de la función
    }

    // TODO: Crea un mensaje de saludo personalizado
    // Pista: usa template literals `Hola, ${nombre}! Bienvenido...`

    const mensaje = `¡Hola, ${nombre}! 👋 Bienvenido a JavaScript.`;

    // TODO: Muestra el mensaje en el div resultadoSaludo

    resultadoSaludo.innerHTML = mensaje;
    resultadoSaludo.classList.add("mostrar");

    console.log("Saludo enviado a:", nombre);
});

// Evento EXTRA: también saludar al presionar Enter
inputNombre.addEventListener("keypress", (evento) => {
    // Si la tecla presionada es Enter
    if (evento.key === "Enter") {
        // TODO: Simula un click en el botón de saludar
        // Pista: btnSaludar.click();

        btnSaludar.click();
    }
});

// ========================================
// SECCIÓN 3: CAMBIAR COLOR DE FONDO
// ========================================

// Seleccionar botones
const btnAzul = document.querySelector("#btnAzul");
const btnVerde = document.querySelector("#btnVerde");
const btnRojo = document.querySelector("#btnRojo");

// Evento: botón azul
btnAzul.addEventListener("click", () => {
    // TODO: Cambia el fondo del body a un degradado azul
    // Pista: document.body.style.background = "linear-gradient(...)";

    document.body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    console.log("Color cambiado a azul");
});

// Evento: botón verde
btnVerde.addEventListener("click", () => {
    // TODO: Cambia el fondo del body a un degradado verde

    document.body.style.background = "linear-gradient(135deg, #27ae60 0%, #16a085 100%)";
    console.log("Color cambiado a verde");
});

// Evento: botón rojo
btnRojo.addEventListener("click", () => {
    // TODO: Cambia el fondo del body a un degradado rojo

    document.body.style.background = "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)";
    console.log("Color cambiado a rojo");
});

// ========================================
// 🎯 RETOS ADICIONALES (OPCIONALES)
// ========================================

/*
RETO 1: Agregar un botón "Doble"
- Crea un nuevo botón en el HTML
- Haz que multiplique el contador por 2

RETO 2: Validar que el nombre no tenga números
- Antes de mostrar el saludo, verifica que el nombre solo tenga letras
- Pista: puedes usar una expresión regular o el método .match()

RETO 3: Agregar más colores
- Crea botones para naranja, morado, etc.
- Experimenta con diferentes degradados

RETO 4: Guardar el nombre en localStorage
- Cuando el usuario escriba su nombre, guárdalo
- La próxima vez que abra la página, salúdalo automáticamente
- Pista: localStorage.setItem() y localStorage.getItem()
*/

// ========================================
// NOTAS IMPORTANTES
// ========================================

/*
1. document.querySelector() - Selecciona UN elemento del HTML
2. addEventListener() - Escucha eventos (click, input, keypress, etc.)
3. .textContent - Cambia solo el texto
4. .innerHTML - Cambia el HTML completo (puede incluir etiquetas)
5. .value - Obtiene el valor de un input
6. .style - Cambia estilos CSS desde JavaScript
7. .classList.add() - Agrega una clase CSS
8. console.log() - Muestra mensajes en la consola (útil para depurar)

¡Sigue experimentando y aprendiendo!
*/
