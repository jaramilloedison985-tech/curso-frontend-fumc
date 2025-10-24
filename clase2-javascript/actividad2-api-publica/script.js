/* ========================================
   🛸 ACTIVIDAD 2: CONSUMIR API PÚBLICA
   ========================================

   En esta actividad aprenderás a:
   - Hacer peticiones HTTP con fetch()
   - Obtener datos de una API externa
   - Procesar datos JSON
   - Mostrar información dinámicamente
*/

console.log("✅ Script de API cargado");

// URL de la API de Rick and Morty
const API_URL = "https://rickandmortyapi.com/api/character";

// Seleccionar elementos del DOM
const btnCargar = document.querySelector("#btnCargar");
const btnLimpiar = document.querySelector("#btnLimpiar");
const personajesDiv = document.querySelector("#personajes");
const loadingDiv = document.querySelector("#loading");

// ========================================
// FUNCIÓN: CARGAR PERSONAJES
// ========================================

async function cargarPersonajes() {
    try {
        // 1. Mostrar indicador de carga
        loadingDiv.classList.add("mostrar");
        personajesDiv.innerHTML = ""; // Limpiar contenido previo

        console.log("🚀 Haciendo petición a la API...");

        // TODO: Haz la petición a la API con fetch
        // Pista: const respuesta = await fetch(API_URL);

        const respuesta = await fetch(API_URL);

        // TODO: Convierte la respuesta a JSON
        // Pista: const datos = await respuesta.json();

        const datos = await respuesta.json();

        console.log("✅ Datos recibidos:", datos);

        // 2. Ocultar indicador de carga
        loadingDiv.classList.remove("mostrar");

        // 3. Mostrar personajes en la página
        // TODO: Llama a la función mostrarPersonajes pasándole los resultados
        // Pista: mostrarPersonajes(datos.results);

        mostrarPersonajes(datos.results);

    } catch (error) {
        // Si hay un error, lo mostramos
        console.error("❌ Error al cargar personajes:", error);
        loadingDiv.classList.remove("mostrar");
        personajesDiv.innerHTML = "<p style='text-align:center; color:#e74c3c;'>❌ Error al cargar los personajes. Intenta de nuevo.</p>";
    }
}

// ========================================
// FUNCIÓN: MOSTRAR PERSONAJES EN LA PÁGINA
// ========================================

function mostrarPersonajes(personajes) {
    console.log(`📝 Mostrando ${personajes.length} personajes`);

    // Limpiar contenedor
    personajesDiv.innerHTML = "";

    // TODO: Recorre el array de personajes con un bucle for...of
    // Para cada personaje, crea una tarjeta HTML

    for (let personaje of personajes) {
        // Crear la tarjeta
        const card = crearTarjetaPersonaje(personaje);

        // TODO: Agrega la tarjeta al contenedor personajesDiv
        // Pista: personajesDiv.innerHTML += card;

        personajesDiv.innerHTML += card;
    }
}

// ========================================
// FUNCIÓN: CREAR TARJETA HTML DE PERSONAJE
// ========================================

function crearTarjetaPersonaje(personaje) {
    // Determinar clase CSS según el estado del personaje
    let statusClass = "unknown";
    if (personaje.status === "Alive") {
        statusClass = "alive";
    } else if (personaje.status === "Dead") {
        statusClass = "dead";
    }

    // TODO: Completa el HTML de la tarjeta
    // Usa las propiedades del objeto personaje: name, image, status, species, origin.name

    return `
        <div class="card">
            <img src="${personaje.image}" alt="${personaje.name}">
            <div class="card-info">
                <h3>${personaje.name}</h3>
                <p><strong>Especie:</strong> ${personaje.species}</p>
                <p><strong>Origen:</strong> ${personaje.origin.name}</p>
                <span class="status ${statusClass}">
                    ${personaje.status}
                </span>
            </div>
        </div>
    `;
}

// ========================================
// FUNCIÓN: LIMPIAR PERSONAJES
// ========================================

function limpiar() {
    // TODO: Limpia el contenido del div de personajes
    // Pista: personajesDiv.innerHTML = "";

    personajesDiv.innerHTML = "";
    console.log("🧹 Personajes limpiados");
}

// ========================================
// EVENTOS
// ========================================

// Evento: cargar personajes
btnCargar.addEventListener("click", () => {
    console.log("🔘 Botón 'Cargar Personajes' clickeado");
    // TODO: Llama a la función cargarPersonajes()

    cargarPersonajes();
});

// Evento: limpiar
btnLimpiar.addEventListener("click", () => {
    console.log("🔘 Botón 'Limpiar' clickeado");
    // TODO: Llama a la función limpiar()

    limpiar();
});

// ========================================
// 🎯 RETOS ADICIONALES (OPCIONALES)
// ========================================

/*
RETO 1: Paginación
- La API devuelve info de paginación en datos.info
- Agrega botones "Anterior" y "Siguiente"
- Usa datos.info.next y datos.info.prev para navegar

RETO 2: Filtro por nombre
- Agrega un input para buscar por nombre
- La API acepta: API_URL + "?name=rick"
- Muestra solo los personajes que coincidan

RETO 3: Filtro por estado
- Agrega botones: "Vivos", "Muertos", "Todos"
- Filtra los personajes según su estado
- Pista: puedes usar .filter() en el array

RETO 4: Contador de personajes
- Muestra cuántos personajes se cargaron
- Ejemplo: "Mostrando 20 personajes"
*/

// ========================================
// NOTAS IMPORTANTES
// ========================================

/*
📚 CONCEPTOS CLAVE:

1. async/await:
   - async: marca una función como asíncrona
   - await: espera a que una promesa se resuelva

2. fetch():
   - Hace peticiones HTTP
   - Devuelve una promesa
   - Necesita .json() para convertir la respuesta

3. try/catch:
   - try: código que puede fallar
   - catch: qué hacer si falla

4. API REST:
   - GET: obtener datos
   - La respuesta es JSON (objetos y arrays)

5. Template literals:
   - Usar ${variable} dentro de ``
   - Útil para crear HTML dinámico

📖 DOCUMENTACIÓN DE LA API:
https://rickandmortyapi.com/documentation

¡Sigue explorando y experimentando!
*/
