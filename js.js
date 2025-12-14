
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
        manejoErrores("La nota no puede ir vacia");
    }
    
    if (nota.length >= 10) {
        manejoErrores("La nota es muy larga , limite de 5000 caracteres");
    }
}



function manejoErrores(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add("bg-red-600" , "p-1", "text-white" , "rounded-lg" , "my-3" , "text-center",  "hover:p-1.5");

    //Insert in div contenedor
    const contenedor = document.getElementById('part1');
    contenedor.appendChild(mensajeError)
}

//If i add () to the fun , this will respond before than the press submit
formulario.addEventListener('submit',manejoFormulario);