const sobreMiModal = document.querySelector('a[href="#sobre-mi"]');
const modal = document.getElementById('modal-sobre-mi');
const cerrarBtn = document.querySelector('.cerrar');

// listener apertura modal
sobreMiModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// cierre del modal
cerrarBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// cierre del modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// modal para meter pelis nuevas
const btnNuevaEntrada = document.getElementById('btn-nueva-entrada');
const modalNuevaEntrada = document.getElementById('modal-nueva-entrada');
const cerrarBtnEntrada = document.querySelector('.cerrar-entrada');
const formNuevaEntrada = document.getElementById('form-nueva-entrada');
const entradasContainer = document.getElementById('entradas-container');

// apertura del modal para meter peli nueva
btnNuevaEntrada.addEventListener('click', () => {
    modalNuevaEntrada.style.display = 'block';
});

// cierre del modal
cerrarBtnEntrada.addEventListener('click', () => {
    modalNuevaEntrada.style.display = 'none';
});

// cierre del modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modalNuevaEntrada) {
        modalNuevaEntrada.style.display = 'none';
    }
});

// añadir nueva entrada al blog
formNuevaEntrada.addEventListener('submit', (e) => {
    e.preventDefault();
    const titulo = document.getElementById('titulo-pelicula').value;
    const descripcion = document.getElementById('descripcion-pelicula').value;
    const urlImagen = document.getElementById('url-imagen').value;
    
    const nuevaEntrada = document.createElement('article');
    nuevaEntrada.className = 'entrada-pelicula contenido-izquierda';
    
    const contenidoHTML = `
        <div class="imagen-pelicula">
            <img src="${urlImagen}" alt="${titulo}">
        </div>
        <div class="contenido-pelicula">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>
    `;
    
    nuevaEntrada.innerHTML = contenidoHTML;
    // añade la nueva entrada al final
    entradasContainer.appendChild(nuevaEntrada);

    modalNuevaEntrada.style.display = 'none';

    // limpiar el formulario
    formNuevaEntrada.reset();
});

const comentariosForm = document.getElementById('comentarios-form');
const listaComentarios = document.getElementById('lista-comentarios');
const seccionComentarios = document.getElementById('comentarios-lista');

// como no hay comentarios al principio se oculta la seccion
seccionComentarios.style.display = 'none';

comentariosForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    const comentarioItem = document.createElement('div');
    comentarioItem.className = 'comentario-item';
    
    comentarioItem.innerHTML = `
        <div class="comentario-autor">${nombre}</div>
        <div class="comentario-texto">${comentario}</div>
    `;
    
    // se agrega el comentario a la lista al principio
    listaComentarios.insertBefore(comentarioItem, listaComentarios.firstChild);
    
    // se muestra la sección de comentarios si estaba oculta
    if (seccionComentarios.style.display === 'none') {
        seccionComentarios.style.display = 'block';
    }
    
    // limpia el formulario
    comentariosForm.reset();
});