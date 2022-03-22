//formulario contacto
const tecla = document.getElementById('submitComment');

function formComment(){
    const nameComment = document.getElementById('name');
    return nameComment.value;
}

tecla.addEventListener ('keydown', e => {
    console.log(e)
    if(e.keyCode === 13) {
        const nombreIngresado = formComment ();
        alert(`Thanks ${nombreIngresado}!`)
    }
});

