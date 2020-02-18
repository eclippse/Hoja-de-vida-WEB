// var num = 0;
// var imagen = document.getElementById("imagenCambio");

// function adelante(){
    
//     if(num>5){
//         num=0;
//     }
//     imagen.src="resources/primeras/imagen"+num+".pnG";
//     num++;
//     console.log(imagen);
// }

// function inicio() {

//     setInterval(adelante, 3000);
    
//     }
    
//     window.onload=inicio;

var valor = 600;

function bajar(){
    window.scroll({
        top: valor,
        behavior: 'smooth'
    })
}

function bajarA(){
    window.scroll({
        top: valor*2,
        behavior: 'smooth'
    })
}
    
