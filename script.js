let nivel;
let rankiadas;
const vitorias = 54;
const derrotas = 12;

function nivelEsta(vitorias, nivel) {
    if(vitorias < 11) {
        nivel = "Ferro";
    } else if(vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"; 
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    return nivel;
}

function saldoRankiadas(vitorias, derrotas, rankiadas) {
    rankiadas = vitorias - derrotas; 
    return rankiadas;
}

console.log("O Herói tem saldo de " + (saldoRankiadas(vitorias, derrotas, rankiadas)) + " está no nível de " + (nivelEsta(vitorias, nivel)));