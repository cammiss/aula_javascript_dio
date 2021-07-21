
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar!")
}


function redirecionar(){
    //window.open("https://www.google.com.br/");
    window.location.href = "https://www.google.com.br";
}


function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("Trocar texto")
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}


function load(){
    alert("página carregada");
}


function funcaochange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1,n2){
    return n1 + n2;
}
*/


/*
function validaidade(idade){
    var validar
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade?")
console.log(validaidade(idade));
*/


//alert(soma(5, 10));


/*
function setreplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/
/*alert(setreplace ("Vai Japão", "Japão", "Brasil"));*/


/*
var d = new Date();
alert(d.getMinutes());
alert(d.getHours());
alert(d.getDay());
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <= 5) {
    console.log(count);
    count++;
}
*/


/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
*/


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "))


//var nome = "Camila Monteiro";
//var n1 = 26;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + n1 + " anos");
//alert(n1 + n2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));