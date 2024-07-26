
//variável array contendo o nome do herói e sua xp
let heroi = [
  ["Galahad", 5001] 
]

switch (true) {
  case heroi[0][1] <= 1000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Ferro")
    break;
  case heroi[0][1] <= 2000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Bronze")
    break;
  case heroi[0][1] <= 5000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Prata")
    break;
  case heroi[0][1] <= 7000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Ouro")
    break;
  case heroi[0][1] <= 8000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Platina")
    break;
  case heroi[0][1] <= 9000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Ascendente")
    break;
  case heroi[0][1] <= 10000:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Imortal")
    break;
  case heroi[0][1] >= 10001:
    console.log(" O Herói de nome " + heroi[0][0] + " está no nível de Radiante")
}

