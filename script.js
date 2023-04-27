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
    msg.innerHTML = '<h2>Respostas</h2> <ul>' +
    '<li>' +
        '1. O vinho é feito a partir da fermentação das uvas. As uvas são colhidas e esmagadas para extrair o suco, que é colocado em recipientes para fermentar, geralmente com a adição de leveduras para converter os açúcares em álcool. O vinho é então armazenado em barris ou garrafas para maturação antes de ser engarrafado e vendido.'  +
    '</li>' +
    '<li>' +
        '2. Existem muitas variedades de uvas usadas para produzir vinho tinto, mas algumas das mais comuns incluem Cabernet Sauvignon, Merlot, Pinot Noir, Syrah e Zinfandel.' +
    '</li>' +
    '<li>' +
        '3. Um vinho tinto seco tem pouco ou nenhum açúcar residual, enquanto um vinho tinto doce tem açúcar residual significativo. Isso pode ser devido a diferenças no processo de fermentação ou na adição de açúcar durante o processo de vinificação.' +
    '</li>' +
    '<li>' +
        '4. O teor alcoólico do vinho é determinado pela quantidade de açúcares presentes no suco de uva e pela eficiência da fermentação. O teor alcoólico pode ser medido com um densímetro ou refratômetro.' +
    '</li>' +
    '<li>' +
        '5. A melhor forma de armazenar uma garrafa de vinho é em uma adega ou em um local fresco, escuro e sem vibração. A garrafa deve ser armazenada na posição horizontal para manter a rolha úmida e evitar a entrada de ar.' +
        '</li>' +
    '<li>' +
        '6. Algumas das principais regiões vinícolas do mundo incluem Bordeaux, Borgonha e Champagne na França, Toscana e Piemonte na Itália, Rioja na Espanha, Napa Valley e Sonoma na Califórnia, e Barossa Valley e Hunter Valley na Austrália.' +
    '</li>' +
    '<li>' +
        '7. Bouquet é a expressão usada para descrever o aroma do vinho, que pode ser influenciado por fatores como a variedade de uva, o processo de vinificação e o envelhecimento.' +
    '</li>' +
    '<li>' +
        '8. Um vinho pode estar azedo ou estragado se tiver um sabor ou cheiro desagradável ou oxidado. Isso pode ser causado por exposição ao ar, contaminação bacteriana ou falhas no processo de vinificação.' +
    '</li>' +
    '<li>' +
        '9. O vinho orgânico é produzido sem o uso de pesticidas, herbicidas ou fertilizantes sintéticos, enquanto o vinho convencional pode usar esses produtos químicos. Além disso, o vinho orgânico pode ter requisitos adicionais para a produção e certificação.' +
    '</li>' +
    '<li>' +
        '10. A escolha do vinho ideal para acompanhar carne vermelha depende de diversos fatores, como o tipo de carne, o modo de preparo, o molho e os acompanhamentos. Normalmente, vinhos tintos são os mais escolhidos, pois possuem sabor e estrutura mais intensos, que complementam bem a carne. Entretanto, para carnes mais leves, vinhos tintos suaves com taninos leves, como Pinot Noir ou Merlot, podem ser uma boa opção. Já para carnes mais pesadas, vinhos tintos encorpados com taninos mais intensos, como Cabernet Sauvignon ou Syrah, podem ser mais adequados. No final, a escolha do vinho depende do gosto pessoal de cada um, sendo recomendado experimentar diferentes vinhos para encontrar o melhor para o seu paladar.' +
    '</li>'
  }
                    
    
    



