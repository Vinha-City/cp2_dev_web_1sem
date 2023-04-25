function changeColor() {
const button1 = document.getElementById('button1');
          const button2 = document.getElementById('button2');
          const button3 = document.getElementById('button3');
          const body = document.querySelector('body');
    
          button1.addEventListener('click', function() {
            body.style.backgroundColor = '#2e3c47';
          });
    
          button2.addEventListener('click', function() {
            body.style.backgroundColor = '#e1ffbb';
          });
    
          button3.addEventListener('click', function() {
            body.style.backgroundColor = '#2f872a';
          });
        }          

function validar(){
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
    if(nome =="" && email =="" && telefone == ""){
        alert("PREENCHA TODOS OS CAMPOS")
    }else{
        alert("Acesso permitido")
        window.open('sobre.html')
    }
}

function perguntas(){
    let p1 = Number(prompt("Como é feito o vinho?"))
    let p2 = Number(prompt("Quais são as principais uvas usadas para produzir vinho tinto?"))
    let p3 = Number(prompt("Qual a diferença entre um vinho tinto seco e um vinho tinto doce?"))
    let p4 = Number(prompt("Como é determinado o teor alcoólico do vinho?"))
    let p5 = Number(prompt("Qual a melhor forma de armazenar uma garrafa de vinho?"))
    let p6 = Number(prompt("Quais são as principais regiões vinícolas do mundo?"))
    let p7 = Number(prompt("O que significa a expressão ''bouquet'' em relação ao vinho?"))
    let p8 = Number(prompt("Como saber se um vinho está ''azedo'' ou estragado?"))
    let p9 = Number(prompt("Qual a diferença entre vinho orgânico e vinho convencional?"))
    let p10 = Number(prompt("Qual o melhor vinho para acompanhar carne vermelha?"))
    let msg = document.getElementById('msg')
    msg.innerHTML = `<h2>Processando o resultado</h2>`
}
