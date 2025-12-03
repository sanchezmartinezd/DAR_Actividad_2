// Modal Sobre Mí
const sobreMiLink = document.querySelector('a[href="#sobre-mi"]');
const modal = document.getElementById('modal-sobre-mi');
const closeBtn = document.querySelector('.close');

// Abrir modal al hacer clic en "Sobre mí"
sobreMiLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Cerrar modal con el botón X
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Sistema de comentarios
const comentariosForm = document.getElementById('comentarios-form');
const comentariosLista = document.getElementById('comentarios-lista');

comentariosForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    
    // Crear elemento de comentario
    const comentarioItem = document.createElement('div');
    comentarioItem.className = 'comentario-item';
    comentarioItem.style.animation = 'slideIn 0.3s ease-out';
    
    comentarioItem.innerHTML = `
        <div class="comentario-autor">${nombre}</div>
        <div class="comentario-texto">${comentario}</div>
    `;
    
    // Remover mensaje de "no hay comentarios" si existe
    const noComentarios = comentariosLista.querySelector('.no-comentarios');
    if (noComentarios) {
        noComentarios.remove();
    }
    
    // Agregar el comentario a la lista
    comentariosLista.insertBefore(comentarioItem, comentariosLista.firstChild);
    
    // Limpiar el formulario
    comentariosForm.reset();
    
    // Mostrar mensaje de confirmación
    const button = comentariosForm.querySelector('button');
    const textoOriginal = button.textContent;
    button.textContent = '¡Comentario enviado!';
    button.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    
    setTimeout(() => {
        button.textContent = textoOriginal;
        button.style.backgroundColor = '';
    }, 2000);
});