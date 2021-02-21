'use strict'


function imprimir (){
    window.print();
};

//Desplegar el menú

//Creamos dos variables, tanto la del boton menu como el menu desplegable

var mostrar = document.querySelector('#mainbox ul');
var botonmenu = document.getElementById('iconomenu');

//Creamos el evento, con click y creamos una función

botonmenu.addEventListener('click', desplegar, false);

//La función la pasamos un parámetro, event, llamamos a la clase show que se va hacer que el menu se muestre en block, y cancelamos el evento con preventDefault al volverle a clicar

function desplegar(event){
    this.classList.toggle('show');
    mostrar.classList.toggle('show');
    event.preventDefault();
};
    
//Con toogle estamos alternado entre el id y la clase, llamamos a la clase que le hemos indicado el estilo en css, en este caso show

