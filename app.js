// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Variables
const ListaAmigos = [];
const inputAmigos = document.getElementById ('amigo');
const ulListaAmigos = document.getElementById ('listaAmigos')
const resultado = document.getElementById ('resultado')

// Funciones
function capitalizarNombre(nombre) {
    return nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
}

function agregarAmigo() {
    let nombreFormateado = capitalizarNombre(inputAmigos.value.trim());
    console.log("Valor ingresado:", nombreFormateado);
    console.log("Es válido:", inputAmigos.checkValidity());

    // Verificar si el nombre ya está en la lista
    if (ListaAmigos.includes(nombreFormateado)) {
        return alert(`El nombre "${nombreFormateado}" ya está en la lista.`);
    }

    if (inputAmigos.checkValidity()) {
        ListaAmigos.push(nombreFormateado);
        ulListaAmigos.innerHTML += `<li>${nombreFormateado}</li>`;
        inputAmigos.value = ""; // Limpiar input después de agregar
    } else {
        console.log("No pasó la validación");
        alert('Ingrese un nombre válido (solo letras, mínimo 4 caracteres)');
    }
}


function sortearAmigo() {
    if (ListaAmigos.length < 2){
        resultado.textContent = 'Necesitas al memos dos amigos en la lista para jugar';
        return;
    }
    const sortear = Math.floor(Math.random ()*ListaAmigos.length);
    const amigoSecreto = ListaAmigos[sortear];
    resultado.innerHTML = 'el amigo secreto es: '+`<li>${amigoSecreto}</li>`;
    ListaAmigos.length = 0; 
    ulListaAmigos.innerHTML = "";  //limpiar lista
}