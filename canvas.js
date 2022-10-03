var cabecaFeita 



function desenharCanvas() {
  tablero.lineWidth=4
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "#F3F5FC"
  tablero.strokeStyle = "#0A3871"
  tablero.fillRect(0,0,1200,800)
  tablero.beginPath();
// tablero.moveTo(650,500)
// tablero.lineTo(900,500)



cabecaFeita = "nao"



// posiciona a base da forca

 tablero.moveTo(650,400)
 tablero.lineTo(900,400)

  tablero.stroke()
  tablero.closePath()
}

function desenharLinhas() {
  tablero.lineWidth=3
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = "#0A3871"
  tablero.beginPath()
  let largura=600/palavraSecreta.length
  for (let i=0;i<palavraSecreta.length;i++){
//    tablero.moveTo(500+(largura*i),640)
//    tablero.lineTo(550+(largura*i),640)

// posiciona traços para a palavra

  tablero.moveTo(500+(largura*i),470)
  tablero.lineTo(550+(largura*i),470)



  }
  tablero.stroke()
  tablero.closePath()
}
function escreverLetraCorreta(index) {
  tablero.font = 'bold 41px Inter';
  tablero.lineWidth=3
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "#0A3871"
  let largura=600/palavraSecreta.length

// posiciona letras sobre os traços

  tablero.fillText(palavraSecreta[index],505+(largura*index),460)
  tablero.stroke()
}

function escreverLetraIncorreta(letra, errorsLeft) {
  tablero.lineWidth=3
  tablero.font = 'bold 30px Inter';
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle="#0A3871"

// coloca letras erradas sob os traços

  tablero.fillText(letra,535+(40*(10-errorsLeft)),520,40)
}

function desenharForca(pontos) {
  tablero.lineWidth=4
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = "#0A3871"
  if(pontos===8){//poste lateral
  tablero.moveTo(700,400)
  tablero.lineTo(700,50)
  }
  if(pontos===7){//teto 
  tablero.moveTo(850,50)
  tablero.lineTo(700,50)
  }
  if(pontos===6){//corda
  tablero.moveTo(850,50)
  tablero.lineTo(850,100)
  }
  if(pontos===5){//para cara
  tablero.strokeStyle='0A3871';
  tablero.beginPath();
  tablero.arc(850,137,40,0, 2*3.14)
  tablero.fillStyle= "#F3F5FC"
  tablero.fill();
  cabecaFeita = "sim";
  }
  if(pontos===4){//para corpo
  tablero.moveTo(850,275)
  tablero.lineTo(850,175)
  }
  if(pontos===3){//para perna esquerda
  tablero.moveTo(850,275)
  tablero.lineTo(800,326)
  }
  if(pontos===2){//para perna direita
  tablero.moveTo(850,275)
  tablero.lineTo(890,326)
  }
  if(pontos===1){//para mão izquerda
  tablero.moveTo(850,200)
  tablero.lineTo(800,251)
  }
  if(pontos===0){//para mão direita
  tablero.moveTo(850,200)
  tablero.lineTo(890,251)
  }
  tablero.stroke()
  tablero.closePath()
}

function exibirDerrota() {
  tablero.font = ' bold 42px Inter';
  tablero.lineWidth=3
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle="red"

  tablero.beginPath();
  tablero.arc(838,134,8,0, 2*3.14)
  tablero.fill();

  tablero.beginPath();
  tablero.arc(862,134,8,0, 2*3.14)
  tablero.fill();

  tablero.beginPath();
  tablero.arc(850,161,10,0, 2*3.14)
  tablero.fill();

  tablero.fillStyle= "#F3F5FC"
  tablero.beginPath();
  tablero.arc(850,165,9,0, 2*3.14)
  tablero.fill();

  tablero.fillStyle= "darkblue"
  tablero.fillText("Fim de jogo!",930,320)
  tablero.fillText("Morreu",973,370)

  tablero.font = 'bold 20px Inter';

  tablero.lineWidth=2
  tablero.fillStyle="black"
  tablero.font = 'bold 20px Inter';
  tablero.fillText("A palavra éra: ",660,630)
  tablero.fillText(palavraSecreta,790,630)

}

function exibirVitoria() {
 
if (cabecaFeita == "sim") {

  tablero.beginPath();
  tablero.arc(838,134,8,0, 2*3.14)
  tablero.fill();

  tablero.beginPath();
  tablero.arc(862,134,8,0, 2*3.14)
  tablero.fill();

  tablero.beginPath();
  tablero.arc(850,161,10,0, 2*3.14)
  tablero.fill();

  tablero.fillStyle= "#F3F5FC"
  tablero.beginPath();
  tablero.arc(850,156,9,0, 2*3.14)
  tablero.fill();
  cabecaFeita = "nao";

}

else

  tablero.font = 'bold 42px Inter';
  tablero.lineWidth=3
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle="darkblue"
  tablero.fillText("Ganhou,",950,320)
  tablero.fillText("Parabéns",930,360)

  setTimeout( recarregar , 15000)
}   

function recarregar(){
  location.reload(); 
}