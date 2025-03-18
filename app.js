// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Error: Debe ingresar un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Error: No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo seleccionado es: <strong>${amigoSeleccionado}</strong></li>`;
}
