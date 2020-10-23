function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));

    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://digitalinnovation.one");
    window.location.href = "https://digitalinnovation.one";
}

function trocar(elemento){
    elemento.innerHTML = "Tira o mouse daqui!";
    //document.getElementById("mousemove").innerHTML = "Tira o mouse daqui!";
}
function grato(elemento){
    elemento.innerHTML = "Obrigado.";
    //document.getElementById("mousemove").innerHTML = "Obrigado.";
}

function load(){
    console.log("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    } else {
        validar = false
    }
    return validar;
}

var idade = prompt("Informe sua idade: ");
if (validaIdade(idade)){
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}
//console.log(validaIdade(idade));
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase,nome,novo_nome){
    return frase.replace(nome,novo_nome)
}

alert(soma(15,10));
alert(setReplace("Vai Japão!", "Japão", "Brasil"));
*/


/*
var d = new Date();
console.log(d);
console.log(d.getUTCMilliseconds());
*/

/*
var count;
for(count=5; count != 0; count--){
    console.log(count);
};
*/

/*
var count=0;
contador();

function contador() {
    while (count < 5) {
        console.log(count);
        count++;
    };
}
*/

/*
var count=0;
while (count < 5){
    console.log(count);
    count++;
};
*/


/*
var idade = prompt("Informe a sua idade");
if (idade >= 18){
    alert("maior de idade");
} else {
    alert("menor de idade");
}
*/


/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"pera", cor:"verde"}];
console.log(frutas);
alert("A " + frutas[1].nome + " é " + frutas[0].cor + "?");
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/



/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista[0]);
console.log(lista.toString()[0]);
*/



/*
var nome = "André Moacir";
var sobrenome = "Pessi"
var cidade = "Porto Alegre";
var frase = "A seleção do Brasil é a melhor do mundo!";
//alert("Bem vindo " + nome + " de " + cidade);

console.log(nome);
console.log(nome + " " + sobrenome);
console.log(frase.replace("Brasil", "Rio Grande do Sul"));
console.log(frase.toUpperCase());
*/