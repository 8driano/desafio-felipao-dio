//entrada
let nomePersonagem = "Witty"
let xp = 8500
let nivelPersonagem = ""

//estrutura de decisão
if (xp <= 1000){
    nivelPersonagem = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
    nivelPersonagem = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivelPersonagem = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivelPersonagem = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivelPersonagem = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivelPersonagem = "Ascendente"
} else if(xp >= 9001 && xp <= 10000) {
    nivelPersonagem = "Imortal"
} else {
    nivelPersonagem = "Radiante"
}

//saída
console.log("O Herói de nome " + nomePersonagem + " está no nível de " + nivelPersonagem)