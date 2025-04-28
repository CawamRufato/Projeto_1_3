let nome_usuario="";

let elemento = document.querySelector("#nome_usuario");

while (nome_usuario ==""){
    nome_usuario = prompt("Qual é seu nome?")
}
if(nome_usuario == null){
    elemento.textContent= "seja muito bem vindo!";
}else{
    elemento.textContent = nome_usuario
}