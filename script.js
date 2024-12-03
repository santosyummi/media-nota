document.getElementById('formulario').addEventListener('submit', function(event){
event.preventDefault();
//obter as notas inseridas pelo usuário
let nota1=parseFloat(document.getElementeById ('nota1').value);
let nota2=parseFloat(document.getElementeById ('nota2').value);
let nota3=parseFloat(document.getElementeById ('nota3').value);

//calcular a média
let media=(nota1+nota2+nota3)/3;

//exibir a mesagem de resultado
let resultadoDiv = document.getElementeById('resultado')
if(media>=6.0){
    resultadoDiv.innerHTML =  `<p class="aprovdo">Aprovado! Sua média foi: ${media.toFixed(2)}</p>`;
} else{
    resultadoDiv.innerHTML = `<p class="recuperacao">Recuperação. Sua média foi: ${media.toFixed(2)}</p>`;
}

});