const { createElement } = require("react");

const formulario = document.getElementById('formulario');
const lista = document.getElementById('listaNotas');
let notas = [];

function manejoFormulario(e) {
    e.preventDefault();
    addNota();
} 

function addNota() {
    const nota = document.getElementById('textoNota').value;
    if (nota.length === 0) {
        
    }
    console.log(nota);
    
}

function manejoErrores(error) {
    const mensajeError = createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add()
}

//If i add () to the fun , this will respond before than the press submit
formulario.addEventListener('submit',manejoFormulario);