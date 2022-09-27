let elInput = document.getElementById('input-texto');
elInput.addEventListener('keyup', function(e) {
  var keycode=e.keyCode;
  if (keycode == 13) {
   btnEncriptar();
  }
});

const inputTexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");
const borrador=document.querySelector(".borrador");

function btnEncriptar(){  
   if (inputTexto.value==""){
      return entrada();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }
   const textoEncriptado = encriptar(inputTexto.value);
   mensaje.value = textoEncriptado;
   inputTexto.value = "";
}

function encriptar(stringEncriptada){
      let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
      stringEncriptada=stringEncriptada.toLowerCase();
               for(let i=0; i < matrizCodigo.length; i++){
                  if(stringEncriptada.includes(matrizCodigo[i][0])){
                     stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                  }
               }
         return stringEncriptada;  
}

function desencriptar(stringDesencriptada){
let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringDesencriptada=stringDesencriptada.toLowerCase();
for(let i=0; i < matrizCodigo.length; i++){
   if(stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
      }
   }
return stringDesencriptada;
}

function btnDesencriptar(){
   if (mensaje.value==""){
      return salida();
   }else{
      document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
      borrador.value="";
   }
   const textoDesencriptado= desencriptar(mensaje.value);
   inputTexto.value = textoDesencriptado;
   inputTexto.style.color = "white";
}

function btnBorrar(){
   inputTexto.style.color = "black";
   document.getElementsByClassName("borrador")[0].style.background = "rgba(00, 00, 00,.6)";
   borrador.style.textAlign = "center";
   return mensaje.value="", inputTexto.value = "", borrador.value="";  
}
