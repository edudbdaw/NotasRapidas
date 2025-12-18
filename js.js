
const formulario = document.getElementById('formulario');
const lista = document.getElementById('listaNotas');
let notas = [];

/**
 * Manage and call addNote function when we submit the form
 */
function manejoFormulario(e) {
    e.preventDefault();
    addNota();
} 

/**
 * funcition for add a note
 * @function
 */
function addNota() {
    const nota = document.getElementById('textoNota').value;
    if (nota.length === 0) {
        manejoErrores("La nota no puede ir vacia");
        return;
    }
    
    if (nota.length >= 1000) {
        manejoErrores("La nota es muy larga , limite de 5000 caracteres");
        return;
    }else {
        date = new Date (Date.now());
        
        notaObj = {
            date : date,
            text : nota
        }
        notas = [...notas , notaObj];
        
        addHTML();
        
        formulario.reset(); 
    }
}


/**
 * Show a error mesagge in the html
 * @param {String} error 
 */
function manejoErrores(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = '';
    mensajeError.textContent = error;
    mensajeError.classList.add("bg-red-600" , "p-1", "text-white" , "rounded-lg" , "my-3" , "text-center",  "hover:p-1.5");

    //Insert in div contenedor
    const contenedor = document.getElementById('part1');
    contenedor.appendChild(mensajeError)

    /**
     * function for delete error message after 3seg
     * @function 
     */
     setTimeout(() => {
        mensajeError.textContent = "";
        mensajeError.classList.remove("bg-red-600" , "p-1", "text-white" , "rounded-lg" , "my-3" , "text-center",  "hover:p-1.5");
     }, 3000);
}

const listaNotas = document.getElementById("listaNotas");
function addHTML() {

    removeHtml();

    let ul = document.createElement('ul');
    notas.forEach(note => {
        let li = document.createElement('li');
        li.textContent = `Nota : ${note.text} at ${note.date}`    
        ul.appendChild(li);
    });

    listaNotas.appendChild(ul);
    
}

/**
 * Remove repeting notes , deleting first child , just the last note is added
 * @function 
 */
function removeHtml() {
    while(listaNotas.firstChild){
        listaNotas.removeChild(listaNotas.firstChild);
    }
}

//If i add () to the fun , this will respond before than the press submit
formulario.addEventListener('submit',manejoFormulario);