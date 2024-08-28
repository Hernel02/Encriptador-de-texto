var botonEncriptar = document.querySelector(".encriptar")
var botonDesencriptar = document.querySelector(".desencriptar")
var imagen = document.querySelector(".imagen")
var texto1 = document.querySelector(".ingrese_texto")
var textoSeccion2 = document.querySelector(".desen-texto")
var respuesta = document.querySelector(".respuesta")
//var botonCopiar = document.querySelector(".boton-copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar(){
    ocultarAdelante();
    var mensaje = recuperarTexto()
    respuesta.textContent = encriptarTexto(mensaje);
}

function desencriptar(){
    ocultarAdelante();
    var mensaje = recuperarTexto()
    respuesta.textContent = desencriptarTexto(mensaje)
}

function ocultarAdelante(){
    imagen.classList.add("ocultar");
    textoSeccion2.classList.add("ocultar");
}

//function mostrarBoton(){
//   botonCopiar.classList.add("mostrar");
//}

function recuperarTexto(){
    var texto = document.querySelector(".ingrese_texto");
    return texto.value
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal= "";

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal= "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const copiarTexto = document.querySelector(".boton-copiar");

copiarTexto.addEventListener("click", copiar = () =>{
    var solucion = respuesta.textContent;
    navigator.clipboard.writeText(solucion);{
        alert("¡El texto se ha copiado con exito!")
    };
    
})

